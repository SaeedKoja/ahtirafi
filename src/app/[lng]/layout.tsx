import "@/style/global.css";
import { Providers } from "./Providers";
import { RootLayoutProps } from "@/shared/type";
import { dir } from "i18next";
import { languages } from "@/modules/i18n/settings";
import localFont from "next/font/local";
import NavBar from "@/shared/NavBar";
import Footer from "@/shared/Footer";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const tajawal = localFont({
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
    },
    {
      path: "../../../public/font/Tajawal-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-tajawal",
});

export const vazirmatn = localFont({
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
    },
  ],
  variable: "--font-vazirmatn",
});

export const cairo = localFont({
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
        className={`${vazirmatn.variable} ${cairo.variable} ${tajawal.variable}`}
      >
        <Providers lng={lng}>
          <div className="tw-min-h-[100vh] tw-flex tw-flex-col tw-justify-between">
            <div>
              <NavBar lng={lng} />
              {children}
            </div>
            <Footer lng={lng} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
