import Link from "next/link";

import ContestsTable from "../../contests/components/contests-table/ContestsTable";

import { LinearContainer } from "@/components/ui";
import { Contest } from "@/types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  contests: Contest[];
}
export default function ContestsArea(props: Props) {
  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        wrapper: "flex-1 overlow-hidden",
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
      <ContestsTable contests={props.contests} />
    </LinearContainer>
  );
}
