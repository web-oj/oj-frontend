"use client";

import { PropsWithChildren } from "react";

import { Submission } from "@/types";
import { SubmissionProvider } from "../context";

interface Props extends PropsWithChildren {
  submission: Submission;
}
export default function Providers({ submission, children }: Props) {
  return (
    <SubmissionProvider submission={submission}>
      {children}
    </SubmissionProvider>
  )
}
