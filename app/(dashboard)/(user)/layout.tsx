import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Dashboard",
};


export default function Layout(props: PropsWithChildren) {
    return (
        <div>
            {props.children}
        </div>
    );
}
