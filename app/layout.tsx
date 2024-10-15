import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Navigation from "@/components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata:Metadata = {
    title :{
        template : "%s |Next Movies",
        default: "Next Movies",
    },
    description : "The best movies on the best framework!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navigation/>
        {children}
      </body>
    </html>
  );
}
