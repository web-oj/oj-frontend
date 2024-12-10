"use client";

import { Problem } from "@/types";
import { PropsWithChildren } from "react";
import { ProblemProvider } from "./context";

interface Props extends React.PropsWithChildren {
  problem?: Problem
}
export default function Providers(props: PropsWithChildren<Props>) {
  return (
    <ProblemProvider problem={props.problem}>
      {props.children}
    </ProblemProvider>
  )
}
