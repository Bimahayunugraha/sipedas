import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sipedas",
  description:
    "Mengelola surat, mengelompokkan surat, dan menampilkan hasil pengelompokkan surat berdasarkan masa aktif dan tidak aktif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} bg-background !scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
