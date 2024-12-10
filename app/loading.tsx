"use client";

import { Skeleton } from "@nextui-org/react";

import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Loading(props: Props) {
  return (
    <LinearContainer fullheight fullwidth isCentered direction="column">
      <Skeleton className="rounded-2xl bg-foreground-500/25 w-full h-16" />
      <LinearContainer fullheight fullwidth isCentered>
        <Skeleton className="flex-1 rounded-2xl bg-foreground-500/25 w-full h-full" />
        <Skeleton className="flex-1 rounded-2xl bg-foreground-500/25 w-full h-full" />
      </LinearContainer>
    </LinearContainer>
  );
}
