"use client";

import { Avatar, Tooltip } from "@nextui-org/react";

import { useUser } from "../../context";

import { LinearContainer } from "@/components/ui";

export interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function ProfileArea(props: Props) {
  const { data: user } = useUser();

  return (
    <LinearContainer className={"flex-0 items-center max-w-screen-sm w-full bg-foreground-50 h-auto aspect-square"} {...props}>
      <Avatar showFallback className="w-32 h-32" radius="md" />
      <LinearContainer className={"items-center"} direction="column" space="sm">
        <h1 className="text-2xl font-semibold text-foreground-900">
          {user?.handle}
        </h1>
        <Tooltip content={"Rating"}>
          <p className="text-2xl font-bold text-secondary cursor-pointer">
            {user?.bio}
          </p>
        </Tooltip>
      </LinearContainer>
    </LinearContainer>
  );
}
