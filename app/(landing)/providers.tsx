import { PropsWithChildren } from "react";

export default function Providers(props: PropsWithChildren) {
    return (
        <div>
            {props.children}
        </div>
    )
}