import DocumentationPage from "@/components/documentation-page";
import PagesLayout from "@/components/pages-layout";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";

interface AppDocumentationProps {
    markdown: string;
}

export default function AppDocumentation({ markdown }: AppDocumentationProps) {
    return (
        <PagesLayout>
            <DocumentationPage markdown={markdown} />
        </PagesLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const markdownDir = path.join(process.cwd(), "src", "markdown");
    const filenames = fs.readdirSync(markdownDir);

    const paths = filenames.map((filename) => ({
        params: { app: filename.replace(/\.md$/, "") },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { app } = params as { app: string };
    const filePath = path.join(process.cwd(), "src", "markdown", `${app}.md`);
    const markdown = fs.readFileSync(filePath, "utf8");

    return {
        props: {
            app,
            markdown,
        },
    };
};