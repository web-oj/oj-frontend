import Link from "next/link";

import { LinearContainer } from "@/components/ui";
import { mockContests } from "@/mock";
import { ContestCard } from "@/components/ui/contest";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function ContestsArea(props: Props) {
  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        container: "overflow-x-auto py-4",
      }}
      direction="row"
      label={
        <div className="gap-0 flex flex-row justify-between w-full">
          <h1 className="text-2xl font-bold text-foreground">Contests</h1>
          <Link className="text-sm text-foreground-500" href={`/contests`}>
            See all
          </Link>
        </div>
      }
      labelSize="2xl"
    >
      {mockContests.slice(0, 4).map((contest) => (
        <ContestCard key={contest.contest_id} contest={contest} />
      ))}
    </LinearContainer>
  );
}
