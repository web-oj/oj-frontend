import Link from "next/link";

import { LeaderboardTableWrapper } from "../../leaderboard/components/leaderboard-table";

import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function LeaderboardArea(props: Props) {
  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        container: "overflow-x-auto",
        wrapper: "flex-[1]",
      }}
      direction="row"
      label={
        <div className="gap-0 flex flex-row justify-between w-full">
          <Link className="text-sm text-foreground-500" href={`/leaderboard`}>
            See all
          </Link>
        </div>
      }
      labelSize="2xl"
      {...props}
    >
      <LeaderboardTableWrapper />
    </LinearContainer>
  );
}
