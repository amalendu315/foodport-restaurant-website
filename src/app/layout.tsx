import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/website_components/header";
import Footer from "@/components/website_components/footer";
import StickyContactDock from "@/components/website_components/sticky-contact-dock";
import LoadingOverlay from "@/components/website_components/loading-overlay";

export const metadata: Metadata = {
    title: "FoodPort PWA",
    description: "Chinese, Mughlai & Indian delight. Order direct and save!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet"
            />
            <link rel="manifest" href="/manifest.json" />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme) {
                  document.documentElement.classList.add(theme === 'dark' ? 'dark' : 'light');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) { /* ignore */ }
            `,
                }}
            />
        </head>
        <body className="font-body antialiased grainy-bg bg-background text-foreground">
        <LoadingOverlay />
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
        <StickyContactDock />
        <Toaster />
        <script
            id="loading-overlay-script"
            dangerouslySetInnerHTML={{
                __html: `
              (function() {
                const overlay = document.getElementById('loading-overlay');
                if (!overlay) return;

                const onReady = () => {
                  document.body.style.overflow = '';
                  overlay.classList.add('opacity-0');
                  setTimeout(() => {
                    overlay.remove();
                    const script = document.getElementById('loading-overlay-script');
                    if(script) script.remove();
                  }, 400);
                };

                const checkReadyState = () => {
                  if (document.readyState === 'complete') {
                    onReady();
                  }
                }
                
                document.body.style.overflow = 'hidden';
                
                // Fallback to readyState
                document.addEventListener('readystatechange', () => checkReadyState());
                checkReadyState();

              })();
            `,
            }}
        />
        </body>
        </html>
    );
}
