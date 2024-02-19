"use client";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import ThemeRegistry from "./ThemeRegistry";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) => {
  return (
    <>
      <ThemeRegistry lng={lng}>
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>{children}</NiceModal.Provider>
        </QueryClientProvider>
        <Toaster />
      </ThemeRegistry>
    </>
  );
};
