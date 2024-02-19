"use client";
import { vazirmatn } from "./layout";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";

const theme = createTheme({
  palette: {
    primary: {
      200: "#F1F4FF",
      500: "#106FF4",
    },
    Tertiary: {
      400: "#A863FF",
      500: "#7001FE",
    },
    Gold: {
      500: "#F8C53F",
    },
    Grey: {
      700: "#646464",
      900: "#393939",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
  },
});

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) {
  const [{ cache, flush }] = useState(() => {
    const cacheRtl = createCache({
      key: "mui-style-rtl",
      stylisPlugins: [rtlPlugin],
    });

    const cacheLtr = createCache({
      key: "mui-style-ltr",
    });
    const cache = lng == "ar" ? cacheRtl : cacheLtr;
    cache.compat = true;
    const prevInsert = cache.insert;

    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
