"use client";

import { LinearContainer } from "@/components/ui";
import { useProblem } from "../../../context";

function FormatWrapper({ title, format }: { title: string, format: string }) {
    return (
        <LinearContainer direction="column" fullWidth space="sm">
            <h2 className="text-lg font-semibold text-foreground-900">{title}</h2>
            <p className="text-foreground-700 text-base">{format}</p>
        </LinearContainer>
    )
}
export default function Format() {
    const { data } = useProblem();

    return (
        <LinearContainer
            direction="column"
            space="lg"
            classNames={{
                wrapper: "bg-foreground-200 rounded-large p-6",
            }}
            fullWidth
        >
            <FormatWrapper title="Input Format" format={data?.input_format} />
            <FormatWrapper title="Output Format" format={data?.output_format} />
        </LinearContainer>
    )
}