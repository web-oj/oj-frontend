import { LinearContainer } from "@/components/ui";
import { ProblemsTableWrapper } from "../../problems/components/problems-table";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}
export default function ProblemsArea(props: Props) {
    return (
        <LinearContainer
            label={
                <div className="gap-0 flex flex-row justify-between w-full">
                    <h1 className="text-2xl font-bold text-foreground">Contests</h1>
                    <Link
                        href={`/problems`}
                        className="text-base text-foreground-500"
                    >
                        See all
                    </Link>
                </div>
            }
            labelSize="2xl"
            fullwidth
        >
            <ProblemsTableWrapper />
        </LinearContainer>
    );
}