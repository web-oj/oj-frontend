import { LayoutContainer } from "@/components/ui";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Dashboard",
};


export default function Layout(props: PropsWithChildren) {
    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    );
}
