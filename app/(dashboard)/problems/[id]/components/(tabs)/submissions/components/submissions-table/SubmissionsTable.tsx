import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
  Image,
} from "@nextui-org/react";
import { ArrowDown01Icon } from "hugeicons-react";
import { useAsyncList } from "@react-stately/data";
import Link from "next/link";

import { columns, statusOptions } from "./data";

import { SearchIcon } from "@/components/icons";
import { Field, LinearContainer } from "@/components/ui";
import { Language, Submission } from "@/types";

const languageIcon = {
  [Language.CPP]:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  [Language.JAVA]:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  [Language.PYTHON]:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  submissions: Submission[];
}

export default function SubmissionsTable(props: Props) {
  const [submissions, setSubmissions] = React.useState<Submission[]>(
    props.submissions,
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [filterValue, setFilterValue] = React.useState("");

  const list = useAsyncList<Submission>({
    async load({ signal }) {
      let items = submissions;

      return {
        items: items,
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
      switch (columnKey) {
        case "id":
          return <p className="font-semibold">{submission.id}</p>;
        case "language":
          return (
            <Field
              icon={
                <Image
                  alt={submission.language}
                  height={20}
                  src={
                    languageIcon[
                      submission.language as keyof typeof languageIcon
                    ]
                  }
                  width={20}
                />
              }
              label="Language"
              showLabel={false}
              value={submission.language}
            />
          );
        case "createdAt":
          return new Date(submission.createdAt).toLocaleDateString();
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
          <TableRow
            key={item.id}
            as={Link}
            className="cursor-pointer hover:scale-[101%] hover:bg-foreground-50 ease-in-out transition-transform"
            href={`/submissions/${item.id}`}
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
