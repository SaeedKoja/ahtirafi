"use client";
import borderImage from "/public/images/pathsSection.png";
import path from "/public/images/path.png";
import best from "/public/icons/best.svg";
import messages from "/public/icons/messages.svg";
import paper from "/public/icons/paper.svg";
import pen from "/public/icons/pen.svg";
import tasks from "/public/icons/tasks.svg";

import { ParamsLng } from "@/shared/type";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useTranslation } from "@/modules/i18n/client";

const StepCard = ({ icon, text }: { icon: StaticImport; text: string }) => {
  return (
    <div className="tw-bg-primary-20 tw-rounded-lg tw-p-1 md:tw-p-2 tw-flex tw-flex-col tw-items-center tw-text-Grey-90">
      <div className="tw-relative tw-hidden md:tw-block md:tw-w-[60px]">
        <Image src={icon} alt="" priority />
      </div>

      <p className="tw-max-w-[90px] md:tw-max-w-[215px] tw-mt-1 tw-text-[11px] md:tw-text-[15px] tw-text-center">
        {text}
      </p>
    </div>
  );
};

export default function PathsSection({ lng }: ParamsLng) {
  const { t } = useTranslation(lng);

  return (
    <div className="tw-py-8 md:tw-p-4 tw-flex tw-justify-center xl:tw-justify-between tw-items-center">
      <div className="tw-hidden xl:tw-block tw-relative tw-w-[170px] tw-h-[700px]">
        <Image
          src={borderImage}
          alt=""
          priority
          fill
          className="tw-object-cover"
        />
      </div>

      <div className="tw-relative">
        <div className="tw-relative tw-w-[300px] md:tw-w-[720px]">
          <Image src={path} alt="" priority />
        </div>

        <div className="tw-absolute -tw-top-7 tw-right-12 md:-tw-top-14 md:tw-right-[125px]">
          <StepCard
            icon={messages}
            text={t("teacheYouHowToConductJobInterviews")}
          />
        </div>

        <div className="tw-absolute tw-top-8 tw-left-5 md:tw-top-[68px] md:tw-left-12">
          <StepCard icon={pen} text={t("teachesYouHowToPassEmploymentTests")} />
        </div>

        <div className="tw-absolute tw-top-14 tw-right-[38px] md:tw-top-44 md:tw-right-24">
          <StepCard icon={tasks} text={t("itHelpsYouUnderstandHowToPerform")} />
        </div>

        <div className="tw-absolute tw-bottom-10 tw-left-7 md:tw-bottom-28 md:tw-left-[67px]">
          <StepCard
            icon={best}
            text={t("stepToBecomeAnExpertInAnyProfession")}
          />
        </div>

        <div className="tw-absolute -tw-bottom-8 tw-right-9 md:-tw-bottom-12 md:tw-right-[100px]">
          <StepCard icon={paper} text={t("knowTheCompanyAndstartYourJob")} />
        </div>
      </div>

      <div className="tw-hidden xl:tw-block tw-relative tw-w-[170px] tw-h-[700px]">
        <Image
          src={borderImage}
          alt=""
          priority
          fill
          className="tw-object-cover"
        />
      </div>
    </div>
  );
}
