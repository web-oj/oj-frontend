"use client";

import { useAuth } from "@/app/context";
import LeaderboardTable from "./LeaderboardTable";
import RankingTable from "@/components/ranking/RankingTable";

interface LeaderboardTableWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> { }
export function LeaderboardTableWrapper(props: LeaderboardTableWrapperProps) {
  const { user } = useAuth();

  return (
    <>
      <RankingTable users={[user!]} />
    </>
  );
}
