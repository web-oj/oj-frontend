"use client";

import { Button } from "@nextui-org/react";
import { useProblem } from "../../../context";
import { useAuth } from "@/app/context";
import { toast } from "react-toastify";
import { useIDEContext } from "@/components/ide/context";
import { createSubmission } from "@/fetch-functions";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

export default function Submit(props: Props) {
    const problem = useProblem();
    const { user } = useAuth();
    const { code } = useIDEContext();

    const handleSubmit = async () => {
        try {
            if (!user) {
                toast.error("You must be logged in to submit a problem");
                return;
            }

            await createSubmission({
                code,
                problemId: problem.data.id
            })

            toast.success("Problem submitted successfully");
        } catch (error) {
            toast.error("Failed to submit problem");
        }
    }
    return (
        <Button
            color="primary"
            className="absolute top-0 right-0"
            radius="full"
            onClick={handleSubmit}
        >
            Submit
        </Button>
    )
}