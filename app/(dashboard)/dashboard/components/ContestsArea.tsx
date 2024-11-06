import { LinearContainer } from "@/components/ui";
import { mockContests } from "@/mock";
import { ContestCard } from "@/components/ui/contest";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}
export default function ContestsArea(props: Props) {
    return (
        <LinearContainer
            direction="row"
            label={
                <div className="gap-0 flex flex-row justify-between w-full">
                    <h1 className="text-2xl font-bold text-foreground">Contests</h1>
                    <Link
                        href={`/contests`}
                        className="text-base text-foreground-500"
                    >
                        See all
                    </Link>
                </div>
            }
            labelSize="2xl"
            classnames={{
                container: "overflow-x-auto py-4",
            }}
            fullwidth
            fullheight
        >
            {mockContests.slice(0, 3).map((contest) => (
                <ContestCard
                    key={contest.contest_id}
                    contest={contest}
                />
            ))}
        </LinearContainer>
    );
}