"use client";

import { User } from "@/types";
import { UserProvider } from "../../context";

interface Props extends React.PropsWithChildren {
  user?: User;
}
export default function Providers(props: Props) {
  return (
    <UserProvider user={props.user}>
      {props.children}
    </UserProvider>
  )
}
