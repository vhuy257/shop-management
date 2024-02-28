import { NextAuthProvider } from "@/providers/auth"
import { QueryProvider } from "@/providers/query"
import { Be_Vietnam_Pro } from "next/font/google";
import "@/app/globals.css";


const be = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ["400"]
})

export const metadata = {
  title: 'Shop Management - Login',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={be.className}>
        <NextAuthProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}