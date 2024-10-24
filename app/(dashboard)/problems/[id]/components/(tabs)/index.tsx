"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProblemArea from "./Details";
import React from "react";
import Submissions from "../../(submissions)";

export const tabs = [
    {
        label: "Details",
        value: "details",
        component: <ProblemArea />,
    },
    {
        label: "Submissions",
        value: "submissions",
        component: <Submissions />,
    },
    {
        label: "Discussion",
        value: "discussion",
    }
]

export default function ProblemTabs() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeTab = searchParams.get('tab') || 'details';

    const createQueryString = React.useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <Tabs
            radius="full"
            variant="light"
            color="primary"
            classNames={{
                panel: "h-full"
            }}
            selectedKey={activeTab}
            onSelectionChange={(key) => {
                router.push(`${pathname}?${createQueryString("tab", key.toString())}`)
            }}
        >
            {
                tabs.map((tab) => (
                    <Tab
                        key={tab.value} title={tab.label}
                    >
                        {tab.component}
                    </Tab>
                ))
            }
        </Tabs>
    )
}