"use client";

import React from "react";
import Link from "next/link";
import { useAsyncList } from "@react-stately/data";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  User as UserUI,
} from "@nextui-org/react";

import { columns } from "./data";

import { User } from "@/types";
import { mockUsers } from "@/mock";
import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";

export default function LeaderboardTable() {
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<User>({
    async load({ signal }) {
      let items = mockUsers;

      return {
        items: mockUsers,
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
      user.userId.toString().includes(filterValue),
    );
  }, [list.items, filterValue]);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "standing":
        return <>{cellValue}</>;
      case "userName":
        return (
          <UserUI
            avatarProps={{
              showFallback: true,
              alt: user.userName,
              size: "sm",
            }}
            name={
              <Link href={`/profiles/${user.userId}`}>{user.userName}</Link>
            }
          />
        );
      case "rating":
        return <p>{cellValue}</p>;
      default:
        return cellValue;
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <LinearContainer fullwidth direction="row" space="sm">
        <Input
          fullWidth
          isClearable
          placeholder="Search by name..."
          startContent={<SearchIcon />}
          onValueChange={onSearchChange}
        />
      </LinearContainer>
    );
  }, []);

  return (
    <Table
      aria-label="Users Table"
      classNames={{
        tbody: "h-full",
        wrapper: "h-full justify-start",
        base: "h-full overflow-auto",
      }}
      sortDescriptor={list.sortDescriptor}
      topContent={topContent}
      onSortChange={list.sort}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
            className={"bg-transparent"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody isLoading={list.isLoading} items={filteredItems}>
        {(item) => (
          <TableRow key={item.userId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
