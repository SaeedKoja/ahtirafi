"use client";

import { useTranslation } from "@/modules/i18n/client";
import { ParamsLng } from "@/shared/type";
import businessman from "/public/images/businessman.png";
import bgLine from "/public/images/backgrounds/lineBg.png";
import top from "/public/images/aboutSection.png";
import shadow from "/public/images/shadow.png";
import Image from "next/image";

export default function AboutUs({ lng }: ParamsLng) {
  const { t } = useTranslation(lng);

  return (
    <>
      <div className="tw-relative tw-px-10 xl:tw-px-52 md:tw-pt-16 lg:tw-pb-10 tw-font-tajawal tw-flex tw-flex-col md:tw-flex-row tw-gap-5 md:tw-gap-16 tw-justify-center tw-items-center">
        <div className="tw-text-center md:tw-text-start tw-max-w-[600px] md:tw-max-w-[430px]">
          <p className="tw-text-Black tw-text-2xl lg:tw-text-[28px] tw-font-black">
            {t("climbToTheTop")}
          </p>
          <p className="tw-text-Black tw-text-2xl lg:tw-text-[28px] tw-font-black -tw-mt-1">
            {t("enterTheProfessionalPortal")}
          </p>
          <p className="tw-text-Grey-70 tw-my-4 tw-text-[13px] lg:tw-text-[15px] tw-font-sans">
            {t("professionalProgramThatProvidesStudents")}
          </p>
          <button className="tw-py-2 tw-w-44 hover:tw-opacity-80 tw-text-[13px] lg:tw-text-sm tw-transition-all tw-rounded-lg tw-bg-Secondary-50 tw-text-White tw-shadow-md">
            {t("getStartedFee")}
          </button>
        </div>

        <div className="tw-relative tw-px-10">
          <div className="tw-relative tw-w-48  md:tw-w-60 lg:tw-w-72">
            <Image src={businessman} alt="logo" priority />
          </div>

          <div className="tw-absolute tw-right-9 tw-top-[80px] md:tw-top-[110px] tw-w-7 tw-h-[6px] tw-rounded-s-full tw-rounded-e-full tw-bg-[#10B0F4]" />
          <div className="tw-absolute tw-right-2 tw-bottom-7 md:tw-bottom-12 tw-w-8 tw-h-[10px] tw-rounded-s-full tw-rounded-e-full tw-bg-[#FF9A84]" />
          <div className="tw-absolute tw-left-12 lg:tw-left-[70px] tw-top-11 tw-w-8 tw-h-[10px] tw-rounded-s-full tw-rounded-e-full tw-bg-[#69E8C2]" />
          <div className="tw-absolute tw-left-2 lg:tw-left-0 tw-top-32 lg:tw-top-40 tw-w-6 tw-h-2 tw-rounded-s-full tw-rounded-e-full tw-bg-Tertiary-40" />
          <div className="tw-absolute tw-left-7 tw-bottom-6 md:tw-bottom-12 tw-w-6 tw-h-[6px] tw-rounded-s-full tw-rounded-e-full tw-bg-Gold-50" />
        </div>
      </div>

      <div className="tw-relative tw-font-tajawal">
        <div className="tw-absolute tw-top-14 md:tw-top-20 tw-w-full tw-h-[80px] md:tw-h-[180px]">
          <Image src={bgLine} alt="line" priority fill />
        </div>

        <div className="tw-flex tw-flex-col tw-items-center">
          <div className="tw-relative tw-w-[270px] md:tw-w-[500px]">
            <Image src={top} alt="top" priority />
          </div>
          <div className="tw-relative tw-w-[320px] md:tw-w-[700px] lg:tw-w-[800px] -tw-mt-2 md:-tw-mt-5">
            <Image src={shadow} alt="shadow" priority />
          </div>
        </div>

        <p className="tw-px-4 tw-font-black md:tw-text-xl tw-text-center tw-text-primary-50 tw-mt-4">
          {t("goThroughYearsOfTraining")}
        </p>

        <p className="tw-px-4 tw-font-sans tw-text-Grey-70 tw-text-[12px] md:tw-text-sm tw-text-center tw-max-w-[400px] tw-mx-auto tw-mt-3">
          {t("startingFromTheStage")}
        </p>
      </div>
    </>
  );
}
