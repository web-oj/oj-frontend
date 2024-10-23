"use client";
import { LinearContainer } from "@/components/ui";
import { useProblem } from "../../../context";
import DifficultyBadge from "../difficulty_badge";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
export default function Header(props: HeaderProps) {
    const { data: problem } = useProblem();

    return (
        <LinearContainer space="sm" {...props}>
            <div className="flex items-center flex-row gap-1">
                <h1 className="text-2xl font-bold text-foreground">{problem?.title}</h1>
                {/* 
                @todo: Add difficulty badge
                 */}
                <DifficultyBadge difficulty={problem?.difficulty as any} />
            </div>
            {/*
                @todo: Add problem tags
            */}
        </LinearContainer>
    )
}