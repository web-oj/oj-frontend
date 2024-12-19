"use client";

import React from "react";
import Link from "next/link";
import { useAsyncList } from "@react-stately/data";

import { User } from "@/types";
import { getLeaderboard } from "@/fetch-functions";
import RankingTable from "@/components/ranking/RankingTable";

export default function LeaderboardTable() {
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<User>({
    async load({ signal }) {
      let items = await getLeaderboard();

      return {
        items: items,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column as keyof User] as number;
          let second = b[sortDescriptor.column as keyof User] as number;

          const cmp = first - second;

          return sortDescriptor.direction === "descending" ? cmp : -cmp;
        }),
      };
    },
  });
  const filteredItems = React.useMemo(() => {
    return list.items.filter((user) =>
      user.id.toString().includes(filterValue),
    );
  }, [list.items, filterValue]);

  return (
    <RankingTable users={filteredItems} />
  );
}
