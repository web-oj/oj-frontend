"use client";

import { ProblemProvider } from "../context";

import { IDEProvider } from "@/components/ide/context";
import { Problem } from "@/types";
interface Props {
  children: React.ReactNode;
  problem?: Problem;
}
export default function Providers({ children, problem }: Props) {
  return (
    <IDEProvider>
      <ProblemProvider problem={problem}>{children}</ProblemProvider>
    </IDEProvider>
  );
}
