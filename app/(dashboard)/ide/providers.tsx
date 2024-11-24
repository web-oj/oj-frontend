"use client";

import { PropsWithChildren } from "react";

import { IDEProvider } from "@/components/ide/context";

export default function Providers({ children }: PropsWithChildren<{}>) {
  return <IDEProvider>{children}</IDEProvider>;
}
