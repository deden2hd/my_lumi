import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Space_Grotesk, Sora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lumi - Education Finance, Reimagined",
  description: "AI-powered school payment management. No more paper trails. Smart, trustworthy, futuristic.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f5f4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${sora.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
