import { PropsWithChildren } from "react";
import { UserProvider } from "../context";
import { mockUser } from "@/mock";

export default function Providers(props: PropsWithChildren) {
    return (
        <UserProvider user={mockUser}>
            {props.children}
        </UserProvider>
    )
}