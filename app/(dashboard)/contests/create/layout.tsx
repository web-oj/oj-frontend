import { Metadata } from "next";
import { PropsWithChildren } from "react";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "Create Contest",
};


export default function Layout(props: PropsWithChildren) {
    return (
        <Providers>
            {props.children}
        </Providers>
    );
}
