import "@/style/global.css";
import { Providers } from "./Providers";
import { RootLayoutProps } from "@/shared/type";
import { dir } from "i18next";
import { languages } from "@/modules/i18n/settings";
import localFont from "next/font/local";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const tajawal = localFont({
  src: [
    {
      path: "../../../public/font/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/Tajawal-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/font/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
});

const vazirmatn = localFont({
  src: [
    {
      path: "../../../public/font/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/Vazirmatn-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/font/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

const cairo = localFont({
  src: [
    {
      path: "../../../public/font/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/Cairo-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/font/Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});

export default async function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>Ahtirafi</title>
        <meta name="description" content="Description" />
      </head>
      <body
        className={`${vazirmatn.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
