import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Privacy Policies | Peter Aleksander Bizjak s.p.',
	description:
		'Collection of privacy policies and other legalese for projects developed under Peter Aleksander Bizjak s.p.'
};

export default function RootLayout({
	children
}: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main>{children}</main>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
