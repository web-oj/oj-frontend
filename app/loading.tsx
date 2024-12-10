"use client";

import { LinearContainer } from "@/components/ui";
import { Skeleton } from "@nextui-org/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function Loading(props: Props) {
    return (
        <LinearContainer direction="column" isCentered fullheight fullwidth>
            <Skeleton className="rounded-2xl bg-foreground-500/25 w-full h-16" />
            <LinearContainer isCentered fullheight fullwidth>
                <Skeleton className="flex-1 rounded-2xl bg-foreground-500/25 w-full h-full" />
                <Skeleton className="flex-1 rounded-2xl bg-foreground-500/25 w-full h-full" />
            </LinearContainer>
        </LinearContainer>
    )
}