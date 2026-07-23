import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GlobalEdu",
    template: "%s | GlobalEdu",
  },

  description:
    "GlobalEdu helps students explore international study opportunities and access professional education consultancy services.",

  applicationName: "GlobalEdu",

  keywords: [
    "GlobalEdu",
    "study abroad",
    "international education",
    "education consultancy",
    "overseas studies",
    "student consultation",
  ],

  authors: [
    {
      name: "Love Amarachi Onyekwere",
    },
  ],

  creator: "Love Amarachi Onyekwere",
  publisher: "Global Education Overseas Studies Limited",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}