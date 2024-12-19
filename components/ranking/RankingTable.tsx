"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  User as UserUI,
  Image,
} from "@nextui-org/react";

import { columns } from "./data";

import { User } from "@/types";
import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  users?: User[];
}
export default function RankingTable(props: Props) {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    switch (columnKey) {
      case "handle":
        return (
          <UserUI
            avatarProps={{
              src: user.avatar_image,
              alt: user.handle,
              showFallback: true,
            }}
            description={<p>#{user.id}</p>}
            name={
              <p className="flex items-center flex-row gap-1">
                {user.handle}
                <span>
                  <Image
                    alt={user.country}
                    height={16}
                    radius="full"
                    src={`https://flagcdn.com/w320/vn.png`}
                    width={16}
                  />
                </span>
              </p>
            }
          />
        );
      case "rating":
        return <p>{user.rating}</p>;
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
      <TableBody items={props.users}>
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
