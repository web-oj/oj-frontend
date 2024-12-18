"use client";

import { LinearContainer } from "@/components/ui";
import { useSubmission } from "../../context";
import { Input } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Language, SubmissionResult, TestCase } from "@/types";
import { runCode } from "@/utils/piston";
import { toast } from "react-toastify";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function General(props: Props) {
    const submission = useSubmission();

    const [firstFailedTestcase, setFirstFailedTestcase] = useState<TestCase>();
    const [submissionResult, setSubmissionResult] = useState<SubmissionResult>();
    const [output, setOutput] = useState<string>();

    const fetchOutput = useCallback(async () => {
        try {
            const output = await runCode(submission.data.language.toLocaleLowerCase(), submission.data.code);
            return output.output;
        } catch (error) {
            toast.error("Failed to fetch output");
        }
    }, [submission]);

    useEffect(() => {
        if (submission?.data) {
            submission.data.result.forEach((result, index) => {
                if (result.result !== "Accepted") {
                    setFirstFailedTestcase(submission.data.problem.testcases[index]);
                    setSubmissionResult(result);
                }
            });
        }

        fetchOutput().then((output) => {
            setOutput(output);
        })

    }, []);


    return (
        <LinearContainer
            direction="column"
            space="lg"
            fullwidth
            fullheight
        >
            <Input
                value={firstFailedTestcase?.input}
                defaultValue="-"
                classNames={{
                    inputWrapper: "bg-foreground-50",
                }}
                labelPlacement="outside"
                label="Input"
                isReadOnly
            />
            <Input
                value={output}
                defaultValue="-"
                isReadOnly
                classNames={{
                    inputWrapper: "bg-foreground-50",
                }}
                labelPlacement="outside"
                label="Output"
                readOnly
            />
            <Input
                value={firstFailedTestcase?.output}
                defaultValue="-"
                classNames={{
                    inputWrapper: "bg-foreground-50",
                }}
                labelPlacement="outside"
                label="Expected output"
                isReadOnly
            />
        </LinearContainer>

    )
}