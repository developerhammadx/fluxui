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
  title: "FluxUI - Modern UI Components Framework",
  description:
    "Browse, preview, and download premium UI components and developer resources. The Future of Modern UI Components.",
  keywords: [
    "UI components",
    "React components",
    "developer resources",
    "Next.js templates",
    "free downloads",
    "frontend development",
    "FluxUI",
  ],
  authors: [{ name: "FluxUI" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/icon-only.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180" },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "FluxUI - Modern UI Components Framework",
    description:
      "Browse, preview, and download premium UI components and developer resources. The Future of Modern UI Components.",
    type: "website",
    locale: "en_US",
    siteName: "FluxUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FluxUI - Modern UI Components Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxUI - Modern UI Components Framework",
    description:
      "Browse, preview, and download premium UI components and developer resources.",
    images: ["/og-image.png"],
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
