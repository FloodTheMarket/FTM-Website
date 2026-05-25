import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.floodthemarket.co.uk"),
  title: "FTM | Hospitality Growth & Operations",
  description:
    "Modern growth systems for restaurants, cafes and hospitality brands.",
  icons: {
    icon: "/ftm-favicon-original.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "FTM | Hospitality Growth & Operations",
    description:
      "Modern growth systems for restaurants, cafes and hospitality brands.",
    images: ["/ftm-logo-original.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
