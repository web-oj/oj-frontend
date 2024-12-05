"use client";

import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import React from "react";
import { LinearContainer } from "@/components/ui/container/LinearContainer";
import { toast } from "react-toastify";

interface CreateContestFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type CreateContestFormValues = {
    title: string;
    start_time: string;
    end_time: string;
    scoring_rule: string;
    organizer: string;
};

export function CreateContestForm(props: CreateContestFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<CreateContestFormValues>();


    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    const registers = {
        title: register("title", {
            required: "Title is required",
            maxLength: {
                value: 200,
                message: "Title must be less than 200 characters"
            },
        }),
        startTime: register("start_time", { required: "Start time is required" }),
        endTime: register("end_time", { required: "End time is required" }),
        scoringRule: register("scoring_rule", { required: "Scoring rule is required" }),
    }

    React.useEffect(() => {
        if (!isValid) {
            toast.error("Please fill all the required fields");
        }
    }, [isValid]);

    return (
        <form
            {...props}
            onSubmit={onSubmit}
            className="flex flex-col gap-4 lg:min-w-[48ch]"
            id="create-problem-form"
        >
            <Input
                type="text"
                label="Title"
                labelPlacement="outside"
                placeholder="Title"
                description="Max length 200"
                required
                radius="full"
                isRequired
                {...registers.title}
            />
            <LinearContainer direction="column">
                <Input
                    type="datetime-local"
                    label="Start Time"
                    labelPlacement="outside"
                    placeholder="Start Time"
                    isRequired
                    radius="full"
                    {...registers.startTime}
                />
                <Input
                    type="datetime-local"
                    label="End Time"
                    labelPlacement="outside"
                    placeholder="End Time"
                    isRequired
                    radius="full"
                    {...registers.endTime}
                />
            </LinearContainer>
            <Textarea
                label="Scoring Rule"
                isRequired
                placeholder="Type the scoring rule here"
                labelPlacement="outside"
                required
                radius="full"
                classNames={{
                    base: "max-h-[200ch]"
                }}
                {...registers.scoringRule}
            />
        </form>
    );
}