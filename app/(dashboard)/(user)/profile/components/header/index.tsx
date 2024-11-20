"use client";

import { LinearContainer } from "@/components/ui";
import { useUser } from "../../../context";
import { Avatar, Tooltip } from "@nextui-org/react";

export interface UserHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
export function UserHeader(props: UserHeaderProps) {
    const { data: user } = useUser();

    return (
        <LinearContainer
            fullwidth
            className={"items-center"} {...props}
        >
            <Avatar
                radius="md"
                showFallback
                className="w-32 h-32"
            />
            <LinearContainer direction="column" space="sm" className={"items-center"}>
                <h1 className="text-2xl font-semibold text-foreground-900">{user?.user_name}</h1>
                <Tooltip content={"Rating"}>
                    <p className="text-2xl font-bold text-secondary cursor-pointer">{user?.rating}</p>
                </Tooltip>
            </LinearContainer>
        </LinearContainer>
    )
}