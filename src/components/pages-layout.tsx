import { ModeToggle } from './mode-toggle';

export default function PagesLayout({
	children
}: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto">
			<div className="flex h-16 items-center justify-between border-b px-4">
				<div className="text-lg font-semibold">Privacy Policies</div>
				<ModeToggle />
			</div>
			<main>{children}</main>
		</div>
	);
}
