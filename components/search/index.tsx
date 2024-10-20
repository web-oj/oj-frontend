"use client";

import { Input } from "@nextui-org/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = React.useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    const handleSearch = React.useCallback((query: string) => {
        router.push(`${pathname}?${createQueryString("search", query)}`)
    }, [router]);

    return (
        <Input
            classNames={{
                inputWrapper: "bg-primary-50",
            }}
            placeholder="Search anything"
            radius="full"
            type="search"
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
}