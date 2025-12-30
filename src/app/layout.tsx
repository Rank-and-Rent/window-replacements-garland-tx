import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Window Replacement Service of Garland | Premium Window Installation in Garland, TX",
  description:
    "Professional window replacement services in Garland, Texas. Expert installation of Andersen, Pella, and Jeld-Wen windows. Double-hung, casement, bay windows & more. Call 972-734-3158 for a free estimate.",
  keywords:
    "window replacement Garland TX, window installation Garland, Andersen windows Garland, Pella windows Texas, Jeld-Wen windows, double hung windows, casement windows, bay windows, residential window replacement",
  openGraph: {
    title: "Window Replacement Service of Garland | Premium Window Installation",
    description:
      "Transform your home with premium window replacements from Andersen, Pella, and Jeld-Wen. Serving Garland, TX and surrounding areas.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
