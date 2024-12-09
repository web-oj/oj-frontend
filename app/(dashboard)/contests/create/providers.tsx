"use client";

import { PropsWithChildren } from "react";
import React from "react";

import { ContestTrackProvider } from "./context";

export default function Providers(props: PropsWithChildren) {
  return (
    <ContestTrackProvider>
      {props.children}
    </ContestTrackProvider>
  )
}
