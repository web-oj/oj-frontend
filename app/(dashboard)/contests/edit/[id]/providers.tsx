"use client";

import { PropsWithChildren } from "react";
import React from "react";

import { Contest } from "@/types";
import { ContestProvider } from "../../context";

interface ProvidersProps extends React.HTMLAttributes<HTMLDivElement> {
  contest: Contest
}
export default function Providers({ contest, children }: PropsWithChildren<ProvidersProps>) {
  return (
    <ContestProvider contest={contest}>
      {children}
    </ContestProvider>
  );
}
