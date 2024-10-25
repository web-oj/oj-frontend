import { LayoutContainer } from "@/components/ui";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
};


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
}
