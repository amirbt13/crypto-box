import type { Metadata } from "next";

import "./globals.css";
import Provider from "@/providers/Provider";

export const metadata: Metadata = {
  title: "Crypto Box",
  description: "Crypto website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
