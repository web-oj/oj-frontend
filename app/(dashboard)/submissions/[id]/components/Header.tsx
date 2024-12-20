"use client";
import { Clock01Icon, CodeIcon, Tick01Icon } from "hugeicons-react";



import { Field, LinearContainer } from "@/components/ui";
import { useSubmission } from "../../context";
import { useEffect, useState } from "react";
import clsx from "clsx";

enum Status {
    Accepted = "Accepted",
    WrongAnswer = "Wrong Answer",
    Pending = "Pending",
}
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> { }
export default function Header(props: HeaderProps) {
    const { data: submission } = useSubmission();
    const [passed, setPassed] = useState(0);
    const [testCases, setTestCases] = useState(0);
    const [status, setStatus] = useState<Status>(Status.Pending);

    useEffect(() => {
        console.log(submission);
        const passed = submission.result.filter((result) => result.result === Status.Accepted).length;
        setPassed(passed);

        if (passed === submission.problem.testcases.length) {
            setStatus(Status.Accepted);
        } else {
            setStatus(Status.WrongAnswer);
        }


        setTestCases(submission.problem.testcases.length);
    }, [submission]);

    return (
        <LinearContainer
            fullwidth
            classnames={{
                wrapper: "relative",
            }}
            direction="column"
            space="sm"
        >
            <h1 className={clsx(
                "text-2xl font-bold text-foreground capitalize",
                status === Status.Accepted ? "text-success" : status === Status.WrongAnswer ? "text-red-500" : "text-warning"
            )}>
                {status}
            </h1>
            <LinearContainer
                className="text-foreground-500"
                direction="row"
                space="sm"
            >
                <Field
                    icon={<Clock01Icon size={16} />}
                    label="Time Limit"
                    value={new Date(submission?.createdAt).toLocaleString()}
                    showLabel={false}
                />
                <Field
                    icon={<Tick01Icon size={16} />}
                    label="Passed"
                    value={`${passed}/${testCases} testcases passed`}
                    showLabel={false}
                />
                <Field
                    icon={<CodeIcon size={16} />}
                    label="Language"
                    value={submission?.language}
                    showLabel={false}
                />
            </LinearContainer>
        </LinearContainer>
    );
}
