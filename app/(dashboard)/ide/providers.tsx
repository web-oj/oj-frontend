"use client";

import { IDEProvider } from "@/components/ide/context";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren<{}>) {
    return (
        <IDEProvider>
            {children}
        </IDEProvider>
    )
}