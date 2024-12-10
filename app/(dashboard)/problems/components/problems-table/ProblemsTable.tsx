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
import { ArrangeByNumbers19Icon, ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { useAsyncList } from "@react-stately/data";
import Link from "next/link";

import { columns } from "./data";

import { LinearContainer } from "@/components/ui";
import { Problem } from "@/types";
import { useSearchParams } from "next/navigation";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  problems: Problem[];
}

export default function ProblemsTable(props: Props) {
  const searchParams = useSearchParams();
  const searchKey = searchParams.get("search") || "";

  const [problems, setProblems] = React.useState<Problem[]>(props.problems);

  const list = useAsyncList<Problem>({
    async load({ signal }) {
      // @todo: fetch problems from the server
      let items = problems;

      if (searchKey) {
        items = items.filter((problem) =>
          problem.title.toLowerCase().includes(searchKey.toLowerCase()),
        );
      }

      return {
        items: items,
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

  const renderCell = React.useCallback(
    (problem: Problem, columnKey: React.Key): React.ReactNode => {
      switch (columnKey) {
        case "id":
          return (
            <Tooltip content="View submission">
              <a href={`/problems/${problem.id}`}>{problem.id}</a>
            </Tooltip>
          );
        case "title":
          return <Link href={`/problems/${problem.id}`}>{problem.title}</Link>;
        case "difficulty":
          return (
            <p className="p-1 w-fit rounded-full text-foreground-700">
              {problem.difficulty}
            </p>
          );
        default:
          return "-";
      }
    },
    [],
  );

  const topContent = React.useMemo(() => {
    return (
      <LinearContainer fullwidth direction="row" space="sm">
        <div className="flex gap-3">
          {/* <Dropdown
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
                {list.sortDescriptor?.direction || "Difficulty"}
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
              <DropdownItem key="ascending" startContent={<ArrowUp01Icon />} >Ascending</DropdownItem>
              <DropdownItem key="descending" startContent={<ArrowDown01Icon />} >Descending</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </div>
      </LinearContainer>
    );
  }, []);

  React.useEffect(() => {
    list.reload();
  }, [searchKey]);

  return (
    <LinearContainer fullheight fullwidth direction="column">
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
        <TableBody isLoading={list.isLoading} items={list.items} emptyContent="No problems found">
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