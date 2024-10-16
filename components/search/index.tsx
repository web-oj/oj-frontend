"use client";

import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import React from "react";

export function Search() {
    const router = useRouter();

    const createQueryParam = React.useCallback((query: string) => {
        const params = new URLSearchParams();
        params.append("q", query);
        return params.toString();
    }, []);

    const handleSearch = React.useCallback((query: string) => {
        router.push(`/?${createQueryParam(query)}`);
    }, [router, createQueryParam]);

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