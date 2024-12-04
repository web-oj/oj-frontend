"use client";

import { User as UserUI } from "@nextui-org/react";
import { ChampionIcon } from "hugeicons-react";

import { LinearContainer } from "@/components/ui";
import { User } from "@/types";

type RankLevel = "bronze" | "silver" | "gold";
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  level: RankLevel;
  user: User;
}

export default function TopCard({ level, user, ...rest }: Props) {
  const getRankIcon = (level: RankLevel) => {
    switch (level) {
      case "bronze":
        return <ChampionIcon className="text-yellow-700" size={64} />;
      case "silver":
        return <ChampionIcon className="text-gray-500" size={64} />;
      case "gold":
        return <ChampionIcon className="text-yellow-500" size={64} />;
    }
  };

  return (
    <LinearContainer
      {...rest}
      fullwidth
      isCentered
      classnames={{
        wrapper: "bg-foreground-100 p-4 aspect-[3/1]",
      }}
      direction="row"
    >
      <LinearContainer
        fullheight
        fullwidth
        className="items-center"
        direction="column"
        space="lg"
      >
        <UserUI
          avatarProps={{
            alt: user.userName,
            showFallback: true,
          }}
          className="justify-start"
          classNames={{
            name: "text-lg font-semibold",
          }}
          name={user.userName}
        />
        <p className="text-4xl text-foreground-900 font-bold">{user.rating}</p>
      </LinearContainer>
      {getRankIcon(level)}
    </LinearContainer>
  );
}
