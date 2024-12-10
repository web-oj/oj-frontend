"use client";

import { useAuth } from "@/app/context";
import { useRouter } from "next/navigation";

interface Props extends React.PropsWithChildren {
}

export default function GuardWrapper(props: Props) {
    const router = useRouter();
    const { user } = useAuth();

    if (!user) {
        router.push("/login");
        return null;
    }

    return <>{props.children}</>;
}