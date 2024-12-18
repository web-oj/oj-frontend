"use client";

import { Avatar, Tooltip } from "@nextui-org/react";


import { LinearContainer } from "@/components/ui";
import { useAuth } from "@/app/context";

export interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function ProfileArea(props: Props) {
  const { user } = useAuth();

  return (
    <LinearContainer
      direction="column"
      className={"flex-0 max-w-64 w-full bg-foreground-50 aspect-square shadow-sm p-4 rounded-2xl"}
      classnames={{
        container: "items-center justify-center"
      }}
      {...props}>
      <Avatar showFallback className="w-1/2 h-auto aspect-square" radius="full" src={user?.avatar_image} />
      <LinearContainer fullwidth className={"flex-1 justify-center items-center"} direction="column" space="sm">
        <h1 className="text-2xl text-center font-semibold text-foreground-900">
          {user?.handle || "-"}
        </h1>
        <p className="text-sm text-foreground-500 text-center ">
          {user?.email || "-"}
        </p>
        <Tooltip content={"Rating"}>
          <p className="text-2xl font-bold text-secondary cursor-pointer text-center ">
            {user?.bio}
          </p>
        </Tooltip>
      </LinearContainer>
    </LinearContainer>
  );
}
