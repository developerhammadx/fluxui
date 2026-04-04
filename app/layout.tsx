import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BackToTop } from "@/components/back-to-top"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "FluxUI - Developer Resources & UI Components Hub",
  description:
    "Browse, preview, and download premium UI components and developer resources. Elevate your workflow with free, high-quality React components and projects.",
  keywords: [
    "UI components",
    "React components",
    "developer resources",
    "Next.js templates",
    "free downloads",
    "frontend development",
  ],
  authors: [{ name: "FluxUI" }],
  openGraph: {
    title: "FluxUI - Developer Resources & UI Components Hub",
    description:
      "Browse, preview, and download premium UI components and developer resources.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxUI - Developer Resources & UI Components Hub",
    description:
      "Browse, preview, and download premium UI components and developer resources.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased dark", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen bg-background">
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
