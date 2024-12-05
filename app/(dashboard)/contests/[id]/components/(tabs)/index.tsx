"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { LinearContainer } from "@/components/ui";
import DetailsArea from "./details";
import ProblemsArea from "./problems";
import RankingArea from "./ranking";

export const tabs = [
    {
        label: "Details",
        value: "details",
        component: <DetailsArea />
    },
    {
        label: "Problems",
        value: "problems",
        component: <ProblemsArea />
    },
    {
        label: "Ranking",
        value: "ranking",
        component: <RankingArea />
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
        <LinearContainer direction="column" fullwidth fullheight>
            <Tabs
                radius="full"
                variant="light"
                color="primary"
                className="h-fit"
                classNames={{
                    wrapper: "h-full",
                    panel: "h-full overflow-hidden p-0",
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
        </LinearContainer>
    )
}