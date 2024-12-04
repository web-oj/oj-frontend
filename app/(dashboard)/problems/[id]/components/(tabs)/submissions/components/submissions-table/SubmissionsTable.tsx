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

const statusColorMap: Record<string, ChipProps["color"]> = {
  accepted: "success",
  error: "danger",
};

type Submission = {
  id: number;
  createdAt: string;
  status: string;
};

export default function SubmissionsTable() {
  const mockSubmissions: Submission[] = [
    {
      id: 1,
      createdAt: "2021-10-10",
      status: "accepted",
    },
    {
      id: 2,
      createdAt: "2021-10-11",
      status: "error",
    },
    {
      id: 3,
      createdAt: "2021-10-12",
      status: "accepted",
    },
    {
      id: 4,
      createdAt: "2021-10-13",
      status: "error",
    },
    {
      id: 5,
      createdAt: "2021-10-14",
      status: "accepted",
    },
    {
      id: 6,
      createdAt: "2021-10-15",
      status: "error",
    },
  ];
  const [submissions, setSubmissions] =
    React.useState<Submission[]>(mockSubmissions);
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<Submission>({
    async load({ signal }) {
      // @todo: fetch submissions from the server
      let items = mockSubmissions;

      if (statusFilter !== "all") {
        items = items.filter(
          (submission) =>
            submission.status === Array.from(statusFilter).join(""),
        );
      }

      return {
        items: mockSubmissions,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column as keyof Submission] as number;
          let second = b[sortDescriptor.column as keyof Submission] as number;

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
    (submission: Submission, columnKey: React.Key) => {
      const cellValue = submission[columnKey as keyof Submission];

      switch (columnKey) {
        case "id":
          return (
            <Tooltip content="View submission">
              <a href={`/submissions/${submission.id}`}>{cellValue}</a>
            </Tooltip>
          );
        case "createdAt":
          return new Date(submission.createdAt).toLocaleDateString();
        case "status":
          return (
            <Chip
              className="capitalize"
              classNames={{
                content: "text-foreground-700",
              }}
              color={statusColorMap[submission.status]}
              endContent={<CircleIcon fill="currentColor" size={14} />}
              size="sm"
              variant="light"
            >
              {cellValue}
            </Chip>
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
