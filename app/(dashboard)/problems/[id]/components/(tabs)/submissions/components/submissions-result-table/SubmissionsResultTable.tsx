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
import { ArrowDown01Icon, CircleIcon } from "hugeicons-react";
import { useAsyncList } from "@react-stately/data";

import { columns, statusOptions } from "./data";

import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";
import { Submission, SubmissionResult } from "@/types";

const statusColorMap: Record<string, ChipProps["color"]> = {
  accepted: "success",
  error: "danger",
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  submission: Submission;
}

export default function SubmissionsTable(props: Props) {
  const [submissionResults, setSubmissions] = React.useState<
    SubmissionResult[]
  >(props.submission.result);
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<SubmissionResult>({
    async load({ signal }) {
      let items = submissionResults;

      // if (statusFilter !== "all") {
      //   items = items.filter(
      //     (submission) =>
      //       submission.result === Array.from(statusFilter).join(""),
      //   );
      // }

      return {
        items: items,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[
            sortDescriptor.column as keyof SubmissionResult
          ] as number;
          let second = b[
            sortDescriptor.column as keyof SubmissionResult
          ] as number;

          const cmp = first - second;

          if (sortDescriptor.column === "createdAt") {
            first = new Date(a.createdAt).getTime();
            second = new Date(b.createdAt).getTime();

            return sortDescriptor.direction === "descending"
              ? first - second
              : second - first;
          }

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
    (submissionResult: SubmissionResult, columnKey: React.Key) => {
      switch (columnKey) {
        case "id":
          return (
            <Tooltip content="View submissionResult">
              <a href={`/submissions/${submissionResult.id}`}>
                {submissionResult.id}
              </a>
            </Tooltip>
          );
        case "createdAt":
          return new Date(submissionResult.createdAt).toLocaleDateString();
        case "testcase":
          return (
            <Tooltip content="View testcase">
              <a href={`/testcases/${submissionResult.testcase}`}>
                {submissionResult.testcase.id}
              </a>
            </Tooltip>
          );

        case "result":
          return (
            <Chip
              className="capitalize"
              classNames={{
                content: "text-foreground-700",
              }}
              color={statusColorMap[submissionResult.result]}
              endContent={<CircleIcon fill="currentColor" size={14} />}
              size="sm"
              variant="light"
            >
              {submissionResult.result}
            </Chip>
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
        <Input
          fullWidth
          isClearable
          placeholder="Search by name..."
          startContent={<SearchIcon />}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ArrowDown01Icon className="text-small" />}
                variant="flat"
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}
            >
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {status.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </LinearContainer>
    );
  }, []);

  return (
    <Table
      aria-label="Submissions Table"
      classNames={{
        tbody: "h-full",
        wrapper: "h-full justify-start",
        base: "h-full",
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
  );
}
