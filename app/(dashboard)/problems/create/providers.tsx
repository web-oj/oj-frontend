"use client";

import { PropsWithChildren } from "react";
import React from "react";

import { ProblemProvider } from "../context";

export default function Providers(props: PropsWithChildren) {
  return <ProblemProvider>{props.children}</ProblemProvider>;
}
