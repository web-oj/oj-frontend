import { LinearContainer } from "@/components/ui";
import { LeaderboardTableWrapper } from "../../leaderboard/components/leaderboard-table";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}
export default function LeaderboardArea(props: Props) {
    return (
        <LinearContainer
            direction="row"
            label={
                <div className="gap-0 flex flex-row justify-between w-full">
                    <Link
                        href={`/leaderboard`}
                        className="text-sm text-foreground-500"
                    >
                        See all
                    </Link>
                </div>
            }
            labelSize="2xl"
            classnames={{
                container: "overflow-x-auto",
                wrapper: "flex-[1]"
            }}
            fullwidth
            fullheight
            {...props}
        >
            <LeaderboardTableWrapper />
        </LinearContainer>
    );
}