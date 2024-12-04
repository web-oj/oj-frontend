"use client";

import { PropsWithChildren } from "react";
import React from "react";

import { ContestProvider } from "../context";

export default function Providers(props: PropsWithChildren) {
  return <ContestProvider>{props.children}</ContestProvider>;
}
