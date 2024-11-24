import { Metadata } from "next";
import { PropsWithChildren } from "react";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "All Problems",
};

export default function Layout(props: PropsWithChildren) {
  return <Providers>{props.children}</Providers>;
}
