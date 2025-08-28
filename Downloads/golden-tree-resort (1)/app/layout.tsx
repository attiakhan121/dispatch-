import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Goldtree Club - Luxury Hotel & Resort Experience",
  description:
    "Experience unparalleled luxury at Goldtree Club. Premium accommodations, world-class amenities, and exceptional hospitality await.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
