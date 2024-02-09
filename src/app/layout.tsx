import "@/app/globals.css"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "JikanUI",
  description:
    "JikanUI is a web interface for Jikan, the unofficial MyAnimeList API.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
