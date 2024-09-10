import type { Metadata } from "next";
import legal from "@/../public/legal.png"


import "./globals.css";
import { Header } from "@/components/Header";



export const metadata: Metadata = {
  title: "Revenda dos Guri",
  description: "Revenda de carros em pelotas",
  icons: {
    icon: "/legal.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body >
        <Header />
        {children}
      </body>

    </html>
  );
}
