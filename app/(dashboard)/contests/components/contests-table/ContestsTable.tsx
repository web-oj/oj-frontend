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
  Tooltip,
  Input,
  Selection,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { columns } from "./data";

import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";
import { Contest } from "@/types";
import { mockContests } from "@/mock";
import { ArrangeByNumbers19Icon, ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";

export default function ContestsTable() {
  const [contests, setContests] = React.useState<Contest[]>(mockContests);
  const [startTimesFilter, setStartTimesFilter] = React.useState<Selection>("all");
  const [endTimesFilter, setEndTimesFilter] = React.useState<Selection>("all");
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<Contest>({
    async load({ signal }) {
      let items = mockContests;

      return {
        items: mockContests,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column as keyof Contest] as number;
          let second = b[sortDescriptor.column as keyof Contest] as number;

          const cmp = first - second;

          return sortDescriptor.direction === "descending" ? cmp : -cmp;
        }),
      };
    },
  });
  const filteredItems = React.useMemo(() => {
    return list.items.filter((submission) =>
      submission.id.toString().includes(filterValue),
    );
  }, [list.items, filterValue]);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const renderCell = React.useCallback(
    (contest: Contest, columnKey: React.Key) => {
      const cellValue = contest[columnKey as keyof Contest];

      switch (columnKey) {
        case "contestId":
          return (
            <Tooltip content="View contest">
              <a href={`/contests/${contest.contestId}`}>{cellValue}</a>
            </Tooltip>
          );
        case "title":
          return (
            <Link href={`/contests/${contest.contestId}`}>{cellValue}</Link>
          );
        case "startTime":
          return new Date(contest.startTime).toLocaleString();
        case "endTime":
          return new Date(contest.endTime).toLocaleString();

        default:
          return cellValue;
      }
    },
    [],
  );

  const topContent = React.useMemo(() => {
    return (
      <LinearContainer fullwidth direction="row" space="sm">
        <div className="flex gap-3">
          <Dropdown
            classNames={{
              trigger: "bg-foreground-50 shadow-sm",
            }}
          >
            <DropdownTrigger className="hidden sm:flex">
              <Button
                startContent={<ArrangeByNumbers19Icon className="text-foreground-500" />}
                endContent={<ArrowDown01Icon size={16} className="text-small" />}
                variant="flat"
              >
                Start Time
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectionMode="single"
              onSelectionChange={setStartTimesFilter}
            >
              <DropdownItem startContent={<ArrowDown01Icon />} key="all">Decending</DropdownItem>
              <DropdownItem startContent={<ArrowUp01Icon />} key="ascending">Ascending</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </LinearContainer>
    );
  }, []);

  return (
    <LinearContainer fullheight fullwidth direction="column">
      {topContent}
      <Table
        aria-label="Contests Table"
        classNames={{
          tbody: "h-full",
          wrapper: "h-full justify-start",
          base: "h-full overflow-hidden",
        }}
        sortDescriptor={list.sortDescriptor}
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
    </LinearContainer>
  );
}
