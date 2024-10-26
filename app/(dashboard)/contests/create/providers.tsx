"use client";

import { PropsWithChildren } from "react";
import { ContestProvider } from "../context";
import React from "react";

export default function Providers(props: PropsWithChildren) {
    return (
        <ContestProvider>
            {props.children}
        </ContestProvider>
    )
}