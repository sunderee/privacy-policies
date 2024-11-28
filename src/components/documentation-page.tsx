import React from 'react';
import { remark } from 'remark';
import html from 'remark-html';

interface DocumentationPageProps {
	markdown: string;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({ markdown }) => {
	const [content, setContent] = React.useState<string>('');

	React.useEffect(() => {
		const processMarkdown = async () => {
			const result = await remark().use(html).process(markdown);
			setContent(result.toString());
		};
		processMarkdown();
	}, [markdown]);

	return (
		<div className="container mx-auto px-4 py-8 max-w-3xl space-y-8">
			<div
				className="prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: this content is sanitized by remark-html
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default DocumentationPage;
