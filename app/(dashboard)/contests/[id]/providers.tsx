"use client";

import { PropsWithChildren } from "react";

import { ContestProvider } from "../context";
import { Contest } from "@/types";

interface Props extends PropsWithChildren {
  contest: Contest;
}
export default function Providers(props: Props) {

  return (
    <ContestProvider contest={props.contest}>{props.children}</ContestProvider>
  );
}
