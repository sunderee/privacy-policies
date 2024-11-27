import '@/app/globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;