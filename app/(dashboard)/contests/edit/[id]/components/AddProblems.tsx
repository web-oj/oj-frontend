"use client";

import { Modal, ModalHeader, ModalBody, ModalContent, ModalFooter, useDisclosure, Link, Button, Input } from "@nextui-org/react";
import React from "react";
import { getAllProblems } from "@/fetch-functions";
import { LinearContainer } from "@/components/ui";
import { Problem } from "@/types";
import { Add01Icon, Delete01Icon, ImoIcon } from "hugeicons-react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    problemsInContest: {
        score: number;
        problemId: number;
    }[];
    setProblemsInContest: (problemsInContest: {
        score: number;
        problemId: number;
    }[]) => void;
}

export default function AddProblems(props: Props) {
    const { problemsInContest, setProblemsInContest } = props;

    const { isOpen, onOpenChange, onClose, onOpen } = useDisclosure();

    const addProblemsInContest = ({ score = 0, problemId = 0 } = {}) => {
        setProblemsInContest([...problemsInContest, { score, problemId }]);
    }

    const removeProblemFromContest = (problemId: number) => {
        setProblemsInContest(problemsInContest.filter(p => p.problemId !== problemId));
    }

    const editScore = (problemId: number, score: number) => {
        setProblemsInContest(problemsInContest.map(p => p.problemId === problemId ? { ...p, score } : p));
    }

    const ProblemInContestCard = ({ score, problemId }: { score: number, problemId: number }) => {
        return (
            <LinearContainer direction="row" className="bg-foreground-50 p-2 rounded-lg" classnames={{
                container: "items-center justify-between",
            }}>
                <LinearContainer direction="row" space="sm">
                    <Link href={`/problems/${problemId}`} className="text-foreground-500">
                        #{problemId}
                    </Link>
                    <Input
                        type="number"
                        label="Score"
                        labelPlacement="outside-left"
                        value={score.toString()}
                        onChange={e => editScore(problemId, parseInt(e.target.value))}
                    />
                </LinearContainer>
                <Button
                    onClick={() => removeProblemFromContest(problemId)}
                    size="sm"
                    color="danger"
                    isIconOnly
                    radius="full"
                >
                    <Delete01Icon size={16} />
                </Button>
            </LinearContainer>
        )
    }

    const AllProblems = () => {
        const [problems, setProblems] = React.useState<Problem[]>([]);

        React.useEffect(() => {
            getAllProblems().then((data) => {
                const problemsInContestIds = problemsInContest.map(p => p.problemId);
                const problemsInContestSet = new Set(problemsInContestIds);
                const problemsNotInContest = data.filter(p => !problemsInContestSet.has(p.id));
                setProblems(problemsNotInContest);
            });
        }, []);

        const ProblemCard = (problem: Problem) => {
            return (
                <LinearContainer
                    direction="row"
                    fullwidth
                    className="bg-foreground-50 p-2 rounded-lg shadow-sm hover:scale-[1.01] transition-transform ease-in-out cursor-pointer"
                    classnames={{
                        container: "items-center justify-between",
                    }}
                    space="sm"
                >
                    <LinearContainer direction="column" space="sm">
                        <Link href={`/problems/${problem.id}`} className="text-foreground-500">
                            {problem.id}
                        </Link>
                        <p>{problem.title}</p>
                    </LinearContainer>
                    <Button
                        size="sm"
                        color="secondary"
                        isIconOnly
                        radius="full"
                        onClick={() => addProblemsInContest({ problemId: problem.id })}
                    >
                        <Add01Icon size={16} />
                    </Button>
                </LinearContainer>
            )
        }

        return (
            <LinearContainer fullwidth direction="column" space="sm">
                {problems.map(p => <ProblemCard {...p} />)}
            </LinearContainer>
        )
    }

    return (
        <LinearContainer direction="column" fullwidth label="Add Problems">
            <LinearContainer direction="row" fullwidth space="sm" classnames={{
                container: "flex-wrap",
            }}>
                {problemsInContest.map(p => <ProblemInContestCard {...p} />)}
            </LinearContainer>
            <>
                <Button color="secondary" radius="full" onClick={onOpen}>Add Problems</Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    classNames={{
                        base: "bg-foreground-100",
                    }}
                >
                    <ModalContent>
                        <ModalHeader>Add Problems</ModalHeader>
                        <ModalBody>
                            <AllProblems />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                radius="full"
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </LinearContainer>
    )
}