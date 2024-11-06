
"use client";

import React from "react";
import Link from "next/link";
import { useAsyncList } from "@react-stately/data";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, ChipProps, Input, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection, Avatar, User as UserUI } from "@nextui-org/react";

import { User } from "@/types";
import { mockUsers } from "@/mock";
import { SearchIcon } from "@/components/icons";
import { LinearContainer } from "@/components/ui";
import { columns } from "./data";

export default function LeaderboardTable() {
    const [filterValue, setFilterValue] = React.useState("");

    const list = useAsyncList<User>({
        async load({ signal }) {
            let items = mockUsers;

            return {
                items: mockUsers
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
        return list.items.filter(user => user.user_id.toString().includes(filterValue));
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
                return (
                    <>{cellValue}</>
                );
            case "user_name":
                return (
                    <UserUI
                        name={
                            <Link href={`/profiles/${user.user_id}`}>
                                {user.user_name}
                            </Link>
                        }
                        avatarProps={{
                            showFallback: true,
                            alt: user.user_name,
                            size: "sm",
                        }}

                    />
                );
            case "rating":
                return (
                    <p>
                        {cellValue}
                    </p>
                );
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
            aria-label="Users Table"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
            topContent={topContent}
            classNames={{
                tbody: "h-full",
                wrapper: "h-full justify-start",
                base: "h-full overflow-auto",
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
                    <TableRow key={item.user_id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
