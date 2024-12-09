"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  ChipProps,
  Input,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import { ArrangeByNumbers19Icon, ArrowDown01Icon } from "hugeicons-react";
import { useAsyncList } from "@react-stately/data";
import Link from "next/link";

import { columns } from "./data";

import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";
import { Problem } from "@/types";
import { mockProblems } from "@/mock";

// const difficultyColorMap = {
//   1: "#5BFF4F",
//   2: "#FFB031",
//   3: "#FF3131",
// };

const difficultyColorMap = [
  "#5BFF4F",
  "#FFB031",
  "#FF3131",
]
export default function ProblemsTable() {
  const [problems, setProblems] = React.useState<Problem[]>(mockProblems);
  const [difficultiesFilter, setDifficultiesFilter] =
    React.useState<Selection>("all");
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<Problem>({
    async load({ signal }) {
      // @todo: fetch problems from the server
      let items = mockProblems;

      if (difficultiesFilter !== "all") {
        items = items.filter((problem) =>
          difficultiesFilter.has(problem.difficulty.toString()),
        );
      }

      return {
        items: mockProblems,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column as keyof Problem] as number;
          let second = b[sortDescriptor.column as keyof Problem] as number;

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
    (problem: Problem, columnKey: React.Key) => {
      const cellValue = problem[columnKey as keyof Problem];

      const convertDifficulty = (difficulty: number) => {
        switch (difficulty) {
          case 0:
            return "Easy";
          case 1:
            return "Medium";
          case 2:
            return "Hard";
          default:
            return "Unknown";
        }
      };

      switch (columnKey) {
        case "id":
          return (
            <Tooltip content="View submission">
              <a href={`/problems/${problem.id}`}>{cellValue}</a>
            </Tooltip>
          );
        case "title":
          return <Link href={`/problems/${problem.id}`}>{cellValue}</Link>;
        case "difficulty":
          return (
            <div
              className="flex items-center gap-1 p-1 w-fit rounded-full text-foreground-700"
              style={{
                backgroundColor: difficultyColorMap[problem.difficulty],
              }}
            >
              {convertDifficulty(problem.difficulty)}
            </div>
          );
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
                Difficulty
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              defaultSelectedKeys={["1"]}
              selectionMode="single"
              onSelectionChange={setDifficultiesFilter}
            >
              {["1", "2", "3"].map((difficulty) => (
                <DropdownItem key={difficulty}>{
                  difficulty === "1" ? "Easy" : difficulty === "2" ? "Medium" : "Hard"
                }</DropdownItem>
              ))}
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
        aria-label="Problems Table"
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
