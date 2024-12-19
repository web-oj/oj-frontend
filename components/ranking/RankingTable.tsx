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
import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";
import { useAuth } from "@/app/context";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  users?: User[];
}
export default function RankingTable(props: Props) {
  const [filterValue, setFilterValue] = React.useState("");
  const { user } = useAuth()
  const list = useAsyncList<User>({
    async load({ signal }) {
      let items = props.users as User[];

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
        return <p>

        </p>
      default:
        return "-";
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

  React.useEffect(() => {
    list.reload();
  }, [user]);

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
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
