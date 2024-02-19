"use client";

import vedio from "/public/images/vedio.png";
import playCircle from "/public/images/play-circle.png";
import bgImageR from "/public/images/backgrounds/steps-section-bg-r.svg";
import bgImageL from "/public/images/backgrounds/steps-section-bg-l.svg";
import bgGrad from "/public/images/backgrounds/bg-gradient.png";
import man from "/public/images/Man 01.png";
import flagL from "/public/images/flag-l.svg";
import flagR from "/public/images/flag-r.svg";
import bgLine from "/public/images/backgrounds/lineBg.png";

import { ParamsLng } from "@/shared/type";
import Image from "next/image";
import { useTranslation } from "@/modules/i18n/client";

export default function TrainingSteps({ lng }: ParamsLng) {
  const { t } = useTranslation(lng);

  return (
    <div className="tw-relative">
      <div className="tw-absolute tw-top-16 sm:tw-top-10 tw-right-0 tw-w-16 sm:tw-w-32 xl:tw-w-40">
        <Image src={bgImageR} alt="" priority />
      </div>
      <div className="tw-block tw-absolute tw-top-48 tw-left-0 tw-w-16 sm:tw-w-32 xl:tw-w-40">
        <Image src={bgImageL} alt="" priority />
      </div>

      <div className="tw-py-10 md:tw-mb-24 tw-flex tw-flex-col tw-items-center">
        <p className="tw-font-tajawal tw-font-black tw-text-center tw-text-primary-50">
          {t("whatAreTheTrainingStepsInProfessional")}
        </p>

        <div className="tw-relative tw-w-[250px] md:tw-w-[400px] tw-mt-2">
          <Image src={vedio} alt="vedio" priority />
        </div>
        <div className="tw-absolute tw-top-[102px] md:tw-top-32 tw-w-[50px] md:tw-w-[70px]">
          <Image src={playCircle} alt="play circle" priority />
        </div>
      </div>

      <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-text-White md:tw-px-44 tw-font-tajawal tw-font-black">
        <div className="tw-hidden md:tw-block tw-relative tw-w-full tw-max-w-[800px] md:tw-h-[160px] lg:tw-h-[228px]">
          <Image src={bgGrad} alt="" priority fill />
        </div>
        <div className="tw-relative md:tw-absolute tw-top-0 lg:tw-top-7 tw-w-[200px] md:tw-w-[400px] lg:tw-w-[500px]">
          <Image src={man} alt="" priority />
        </div>

        <p className="tw-mt-4 md:tw-mt-10 tw-text-sm md:tw-text-base tw-text-Black">{t("fromBeginnerToExpertInAnyProfession")}</p>

        <div className="tw-flex tw-items-center tw-gap-20 md:tw-mt-10 tw-py-6" dir="rtl">
          <div className="tw-hidden xl:tw-block tw-relative tw-bottom-12 tw-right-60 tw-z-20 tw-w-[168px]">
            <Image src={flagR} alt="line" priority />
          </div>

          <div className="tw-relative xl:tw-w-[840px] xl:tw-h-[330px] tw-z-20 tw-flex tw-flex-col tw-gap-2 tw-items-center">
            <div className="tw-flex tw-justify-center tw-items-center tw-gap-2 md:tw-gap-6 tw-w-[100px] tw-h-[30px] md:tw-w-[190px] md:tw-h-[35px] tw-bg-primary-50">
              <p className="tw-text-[15px] md:tw-text-xl">1614</p>
              <p className="tw-text-[11px] md:tw-text-sm tw-font-semibold">{t("subscriber")}</p>
            </div>

            <div className="tw-flex tw-justify-center tw-items-center tw-gap-6 tw-w-[130px] md:tw-w-[270px] tw-h-[30px] md:tw-h-[35px] tw-bg-Secondary-50">
              <p className="tw-text-[15px] md:tw-text-xl">24</p>
              <p className="tw-text-[11px] md:tw-text-sm tw-font-semibold">{t("trainer")}</p>
            </div>

            <div className="tw-flex tw-justify-center tw-items-center tw-gap-6 tw-w-[160px] md:tw-w-[320px] tw-h-[30px] md:tw-h-[35px] tw-bg-Tertiary-50">
              <p className="tw-text-[15px] md:tw-text-xl">30</p>
              <p className="tw-text-[11px] md:tw-text-sm tw-font-semibold">{t("trainingTrack")}</p>
            </div>

            <div className="tw-flex tw-justify-center tw-items-center tw-w-[200px] md:tw-w-[360px] tw-h-[30px] md:tw-h-[35px] tw-bg-White">
              <p className="tw-text-[11px] md:tw-text-sm tw-font-semibold tw-text-Grey-90">
                {t("allStagesTrackAreFree")}
              </p>
            </div>

            <div
              className="tw-bg-primary-50 tw-cursor-pointer tw-rounded-sm hover:tw-opacity-80 tw-transition-all tw-flex tw-justify-center tw-items-center tw-w-[220px] md:tw-w-[400px] tw-h-[40px] md:tw-h-[50px]"
              style={{
                backgroundImage:
                  "url('/images/backgrounds/button-bg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="tw-text-[11px] md:tw-text-sm tw-font-semibold">
                {t("getStartedFee")}
              </p>
            </div>
          </div>

          <div className="tw-hidden xl:tw-block tw-relative tw-bottom-12 tw-left-60 tw-w-[168px] tw-z-20">
            <Image src={flagL} alt="" priority />
          </div>
        </div>
      </div>

      <div className=" tw-absolute tw-bottom-3 md:tw-bottom-6 xl:tw-bottom-[131px] tw-w-full tw-h-[170px] md:tw-h-[200px]">
        <Image src={bgLine} alt="line" priority fill />
      </div>
    </div>
  );
}
