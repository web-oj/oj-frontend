
"use client";

import React from "react";
import Link from "next/link";
import { useAsyncList } from "@react-stately/data";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, ChipProps, Input, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection } from "@nextui-org/react";

import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";
import { Contest } from "@/types";
import { mockContests } from "@/mock";

import { columns } from "./data";

export default function ContestsTable() {
    const [contests, setContests] = React.useState<Contest[]>(mockContests);
    const [difficultiesFilter, setDifficultiesFilter] = React.useState<Selection>("all");
    const [filterValue, setFilterValue] = React.useState("");

    const list = useAsyncList<Contest>({
        async load({ signal }) {
            let items = mockContests;

            return {
                items: mockContests
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
        return list.items.filter(submission => submission.id.toString().includes(filterValue));
    }, [list.items, filterValue]);

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
        } else {
            setFilterValue("");
        }
    }, []);


    const renderCell = React.useCallback((contest: Contest, columnKey: React.Key) => {
        const cellValue = contest[columnKey as keyof Contest];

        switch (columnKey) {
            case "contest_id":
                return (
                    <Tooltip content="View contest">
                        <a href={`/contests/${contest.contest_id}`}>{cellValue}</a>
                    </Tooltip>
                );
            case "title":
                return (
                    <Link href={`/contests/${contest.contest_id}`}>
                        {cellValue}
                    </Link>
                );
            case "start_time":
                return new Date(contest.start_time).toLocaleString();
            case "end_time":
                return new Date(contest.end_time).toLocaleString();

            default:
                return cellValue;
        }
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <LinearContainer direction="row" space="sm" fullwidth>
                <Input
                    fullWidth
                    isClearable
                    placeholder="Search by name..."
                    startContent={<SearchIcon />}
                    onValueChange={onSearchChange}
                />
            </LinearContainer>
        )
    }, []);
    return (
        <Table
            aria-label="Contests Table"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
            topContent={topContent}
            classNames={{
                tbody: "h-full",
                wrapper: "h-full justify-start",
                base: "h-full",
            }}
        >
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} className={"bg-transparent"} align={column.uid === "actions" ? "center" : "start"} allowsSorting={column.sortable}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody
                items={filteredItems}
                isLoading={list.isLoading}
            >
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
