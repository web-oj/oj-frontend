"use client";

import { PropsWithChildren } from "react";
import { ContestProvider } from "../context";
import { mockContest } from "@/mock";

export default function Providers(props: PropsWithChildren) {

    return (
        <ContestProvider contest={mockContest}>
            {props.children}
        </ContestProvider>
    )
}