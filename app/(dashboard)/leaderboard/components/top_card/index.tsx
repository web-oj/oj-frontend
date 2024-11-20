"use client";

import { LinearContainer } from "@/components/ui";
import { User } from "@/types";
import { User as UserUI } from "@nextui-org/react";
import { ChampionIcon } from "hugeicons-react";

type RankLevel = "bronze" | "silver" | "gold";
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    level: RankLevel;
    user: User;
}

export default function TopCard({ level, user, ...rest }: Props) {
    const getRankIcon = (level: RankLevel) => {
        switch (level) {
            case "bronze":
                return <ChampionIcon size={64} className="text-yellow-700" />;
            case "silver":
                return <ChampionIcon size={64} className="text-gray-500" />;
            case "gold":
                return <ChampionIcon size={64} className="text-yellow-500" />;
        }
    }
    return (
        <LinearContainer
            {...rest}
            direction="row"
            classnames={{
                wrapper: "bg-foreground-100 p-4 aspect-[3/1]"
            }}
            isCentered
            fullwidth
        >
            <LinearContainer direction="column" fullheight fullwidth space="lg" className="items-center">
                <UserUI
                    className="justify-start"
                    classNames={{
                        name: "text-lg font-semibold"
                    }}
                    name={user.user_name}
                    avatarProps={{
                        alt: user.user_name,
                        showFallback: true,
                    }}
                />
                <p className="text-4xl text-foreground-900 font-bold">{user.rating}</p>
            </LinearContainer>
            {getRankIcon(level)}
        </LinearContainer>
    );
}