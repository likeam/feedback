"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      {...props}
      nonce={typeof window === "undefined" ? "nonce" : undefined}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
