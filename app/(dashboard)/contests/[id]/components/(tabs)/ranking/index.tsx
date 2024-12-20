"use client";

import { useContest } from "@/app/(dashboard)/contests/context";
import RankingTable from "@/components/ranking/RankingTable";
import { getRankingByContestId } from "@/fetch-functions";
import { User } from "@/types";
import { useEffect, useState } from "react";

export default function RankingArea() {
  const { data: contest } = useContest();
  const [ranking, setRanking] = useState<User[]>([]);

  const fetchRanking = async () => {
    const users = await getRankingByContestId({
      id: contest.id
    });
    setRanking(users);
  }

  useEffect(() => {
    fetchRanking();
  }, [contest.id]);

  return (
    <RankingTable
      users={ranking}
    />
  )
}
