"use client";

import AboutUs from "@/modules/home/ui/AboutUs";
import PathsSection from "@/modules/home/ui/PathsSection";
import TrainingSteps from "@/modules/home/ui/TrainingSteps";
import { ParamsLngProps } from "@/shared/type";

export default function HomePage({ params: { lng } }: ParamsLngProps) {
  return (
    <div className="tw-mt-4 tw-mb-5 md:tw-mb-14 tw-flex tw-flex-col tw-gap-12 md:tw-gap-24">
      <AboutUs lng={lng} />
      <PathsSection lng={lng} />
      <TrainingSteps lng={lng} />
    </div>
  );
}
