import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eureka",
  description: "Generated by create next app",
  icons: {
    icon: "/image/icon.jpeg",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}