import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Single Page Application',
  description: 'Una aplicación moderna tipo SPA construida con React y Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased h-full flex flex-col")}>
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 fade-in">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
