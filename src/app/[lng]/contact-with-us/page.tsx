"use client";

import { useTranslation } from "@/modules/i18n/client";
import { ParamsLngProps } from "@/shared/type";

export default function ContactWithUsPage({ params: { lng } }: ParamsLngProps) {
  const { t } = useTranslation(lng);
  return (
    <div className="tw-h-[300px] tw-text-3xl tw-font-bold tw-text-Grey-90 tw-flex tw-justify-center tw-items-center ">
        {t("contactWithUsPage")}
    </div>
  );
}
