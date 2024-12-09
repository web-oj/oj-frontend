"use client";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context";

interface Props extends React.PropsWithChildren { }

export default function GuardWrapper(props: Props) {
    const { user } = useAuth();
    const router = useRouter();

    if (user) {
        router.push("/dashboard");
    }

    return <>{props.children}</>;
}