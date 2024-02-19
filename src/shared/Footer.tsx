"use client";

import Image from "next/image";
import bgImageR from "/public/images/backgrounds/footer-bg-r.svg";
import bgImageLT from "/public/images/backgrounds/footer-bg-lt.svg";
import bgImageLB from "/public/images/backgrounds/footer-bg-lb.svg";
import footerLogo from "/public/images/logos/footerLogo.png";
import facebook from "/public/icons/_Facebook.svg";
import instagram from "/public/icons/_Instagram.svg";
import linkedin from "/public/icons/_Linkedin.svg";
import telegram from "/public/icons/_Telegram.svg";
import whatsApp from "/public/icons/_WhatsApp.svg";
import youTube from "/public/icons/_YouTube.svg";
import { routes } from "./staticData";
import Link from "next/link";
import { ParamsLng } from "./type";
import { useTranslation } from "@/modules/i18n/client";
import { useAuthStore } from "@/modules/auth/auth-store";
import { useLogout } from "@/modules/auth/api/logout";
import dynamic from "next/dynamic";
import NiceModal from "@ebay/nice-modal-react";
import { FC } from "react";
import toast from "react-hot-toast";

const socialIcons = [
  telegram,
  whatsApp,
  linkedin,
  instagram,
  youTube,
  facebook,
];

const LoginModal = dynamic(() =>
  import("@/modules/auth/ui/LoginModal").then((mod) => mod.LoginModal)
);

export default function Footer({ lng }: ParamsLng) {
  const { t } = useTranslation(lng);

  const user = useAuthStore((state) => state.user);
  const { mutate: logout } = useLogout();

  return (
    <div className="tw-relative tw-w-full tw-pt-5 xl:tw-pt-[90px] tw-pb-7 xl:tw-pb-[45px]">
      <div className="tw-hidden md:tw-block tw-absolute tw-bottom-0 tw-right-0 tw-w-32 xl:tw-w-40">
        <Image src={bgImageR} alt="logo" priority />
      </div>
      <div className="tw-hidden xl:tw-block tw-absolute tw-top-0 tw-left-0 tw-w-[120px]">
        <Image src={bgImageLT} alt="logo" priority />
      </div>
      <div className="tw-hidden md:tw-block tw-absolute tw-bottom-0 tw-left-0 tw-w-40 xl:tw-w-[263px]">
        <Image src={bgImageLB} alt="logo" priority />
      </div>

      <div className="tw-px-8 md:tw-px-12 lg:tw-px-20 xl:tw-px-40 tw-flex tw-items-start tw-justify-between tw-flex-wrap tw-text-[12px] md:tw-text-[13px] lg:tw-text-fbase tw-gap-y-10 tw-gap-x-4">
        <div className="tw-hidden md:tw-block tw-relative tw-w-16 lg:tw-w-28">
          <Image src={footerLogo} alt="logo" priority />
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4 tw-text-Grey-70">
          <p className="tw-font-tajawal tw-font-bold tw-text-Grey-90 tw-text-[15px] lg:tw-text-[18px]">
            {t("abbreviations")}
          </p>
          {routes?.map((route) => (
            <Link
              className="hover:tw-opacity-80 tw-transition-all"
              key={route.id}
              href={`/${lng}${route.href}`}
            >
              {t(route.name)}
            </Link>
          ))}
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4 tw-text-Grey-70">
          <p className="tw-font-tajawal tw-font-bold tw-text-Grey-90 tw-text-[15px] lg:tw-text-[18px]">
            {t("callUs")}
          </p>
          <p>+1 438 998 - 7091</p>
          <p>+9 551629 - 7353</p>
          <p>Ehtirafy@Ehtirafy.com</p>
          <div className="tw-flex tw-items-center tw-gap-2 xl:tw-gap-6">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="tw-relative tw-w-5 tw-cursor-pointer hover:tw-opacity-80 tw-transition-all"
              >
                <Image src={icon} alt="logo" priority />
              </div>
            ))}
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4 tw-text-Grey-70">
          <p className="tw-font-tajawal tw-font-bold tw-text-Grey-90 tw-text-[15px] lg:tw-text-[18px]">
            {t("policiesAndLaws")}
          </p>
          <p className="tw-cursor-pointer hover:tw-opacity-80 tw-transition-all">
            {t("termsOfUse")}
          </p>
          <p className="tw-cursor-pointer hover:tw-opacity-80 tw-transition-all">
            {t("privacyTerms")}
          </p>
        </div>

        <div className="tw-hidden lg:tw-flex tw-flex-col tw-gap-2 tw-font-cairo tw-font-bold tw-text-White">
          {!user?.access ? (
            <>
              <button className="tw-py-[10px] tw-w-36 hover:tw-opacity-80 tw-transition-all tw-rounded-lg tw-bg-primary-50">
                {t("getStartedFee")}
              </button>

              <button
                onClick={() => NiceModal.show(LoginModal as FC, { lng })}
                className="tw-py-[10px] tw-w-36 hover:tw-opacity-80 tw-transition-all tw-rounded-lg tw-bg-Secondary-50"
              >
                {t("login")}
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                toast.success(t("logoutSuccess"));
              }}
              className="tw-py-[10px] tw-w-36 hover:tw-opacity-80 tw-transition-all tw-rounded-lg tw-bg-Secondary-50"
            >
              {t("logout")}
            </button>
          )}
        </div>
      </div>

      <div
        dir="ltr"
        className="tw-w-full tw-max-w-[420px] tw-mx-auto tw-mt-10 xl:tw-mt-14 tw-pt-4 xl:tw-pt-6 tw-border-t tw-border-[#E4E4E4] tw-text-Grey-90 tw-text-center tw-font-medium tw-font-sans  tw-text-[14px] lg:tw-text-base"
      >
        Ehtirafy, كل الحقوق محفوظة @ 2023
      </div>
    </div>
  );
}
