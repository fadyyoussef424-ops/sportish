import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Boys in the Boat | Sport Presentation",
  description:
    "A closing landing page for a sport presentation about The Boys in the Boat."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
