import { readdir, readFile } from "fs/promises";
import path from "path";
import { remark } from "remark";
import html from 'remark-html';

export async function useMarkdownFile(id: string): Promise<{ markdown: string | null, exists: boolean }> {
    const markdownFilesDirectory = path.join(process.cwd(), 'src', 'markdown');
    const markdownFiles = await readdir(markdownFilesDirectory);

    const markdownFile = markdownFiles.find((item) => item.startsWith(id));
    if (markdownFile === undefined) {
        return { markdown: null, exists: false }
    }

    const markdownFileContents = await readFile(path.join(markdownFilesDirectory, markdownFile), 'utf-8');
    const processedMarkdown = await remark().use(html).process(markdownFileContents);
    const processedMarkdownString = processedMarkdown.toString();

    return { markdown: processedMarkdownString, exists: true }
}