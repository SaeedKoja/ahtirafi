import { useTranslations } from 'next-intl'
import React from 'react'

export default function NoDataFound() {
  const t = useTranslations();
  return (
    <p className="text-center text-[34px] px-10 py-40 font-bold">{t("noDataFound")}</p>
  )
}
