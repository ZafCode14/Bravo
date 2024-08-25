import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Language from "@/components/language";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bravo",
  description: "Bravo link is an all in one free scanner app that offers you multiple other features to help you stay efficient & connected to your team. It allows you to manage your scanned notes from the bravo notebooks as well as manage all your documents & save them in one place.",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="https://i.ibb.co/k0kDVmD/logo-Black.png"/>
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet"/>
        <meta property="og:title" content="Bravo" />
        <meta property="og:description" content="Bravo link is an all in one free scanner app that offers you multiple other features to help you stay efficient & connected to your team. It allows you to manage your scanned notes from the bravo notebooks as well as manage all your documents & save them in one place." />
        <meta property="og:image" content="https://i.ibb.co/k0kDVmD/logo-Black.png"/>
        <meta property="og:url" content="https://bravo-link.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Language/>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}