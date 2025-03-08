import { ModeToggle } from "@/components/mode-toggle";
import { useMarkdownFile } from "@/hooks/useMarkdownFile";
import { notFound } from "next/navigation";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { markdown, exists } = await useMarkdownFile(id);

    if (!exists || markdown === null) {
        return notFound();
    }

    return <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between border-b px-4">
            <div className="text-lg font-semibold">Privacy Policy | {id}</div>
            <ModeToggle />
        </div>
        <main>
            <div className="px-4 py-8 max-w-3xl space-y-8">
                <div
                    className="prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                    dangerouslySetInnerHTML={{ __html: markdown }}
                />
            </div>
        </main>
    </div>
}