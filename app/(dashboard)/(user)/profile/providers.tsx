"use client";

import GuardWrapper from "./GuardWrapper";

interface Props extends React.PropsWithChildren {}
export default function Providers(props: Props) {
  return <GuardWrapper>{props.children}</GuardWrapper>;
}
