"use client";

import { PropsWithChildren } from "react";
import { ProblemProvider } from "../context";
import React from "react";

export default function Providers(props: PropsWithChildren) {
    return (
        <ProblemProvider>
            {props.children}
        </ProblemProvider>
    )
}