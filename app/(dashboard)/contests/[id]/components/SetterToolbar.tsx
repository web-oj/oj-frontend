"use client";
import { useRouter, usePathname } from "next/navigation";
import Toolbar from "@/components/toolbar";
import { Button } from "@nextui-org/react";
import { Add01Icon, Edit01Icon } from "hugeicons-react";
import { useAuth } from "@/app/context";
import { useContest } from "../../context";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function SetterToolbar(props: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useAuth();
    const contest = useContest();

    const id = pathname.split("/").pop();
    
    if (contest.data?.organizer.id !== user?.id) return null;
    if (user) return null;

    return (
        <Toolbar {...props}>
            <Button
                isIconOnly
                radius="full"
                color="secondary"
                onClick={() => router.push(`/contests/${id}/edit`)}
            >
                <Edit01Icon />
            </Button>
            <Button
                isIconOnly
                radius="full"
                className="dark"
            >
                <Add01Icon />
            </Button>
        </Toolbar>
    );
}