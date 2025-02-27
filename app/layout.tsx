import type { Metadata } from "next";
import { Footer } from "./_components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meme Dashboard",
  description: "Find analytics of your favorite memes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
