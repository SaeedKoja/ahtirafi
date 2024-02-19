"use client";

import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren) {
  return <div className="tw-px-3 md:tw-px-8 lg:tw-px-16">{children}</div>;
}
