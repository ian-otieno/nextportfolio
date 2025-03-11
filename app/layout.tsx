import type React from "react"
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Added missing import
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"; // Added missing import
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
