import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { LayoutContainer } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Layout(props: PropsWithChildren) {
  return <LayoutContainer>{props.children}</LayoutContainer>;
}
