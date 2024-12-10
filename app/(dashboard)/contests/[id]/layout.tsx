import { PropsWithChildren } from "react";

import Providers from "./providers";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return <>{children}</>;
}
