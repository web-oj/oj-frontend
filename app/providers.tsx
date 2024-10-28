"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "react-toastify/dist/ReactToastify.css";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <PrimeReactProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </PrimeReactProvider>
    </NextUIProvider>
  );
}
