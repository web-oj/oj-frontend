import Link from "next/link";

import ProblemsTable from "../../problems/components/problems-table/ProblemsTable";

import { LinearContainer } from "@/components/ui";
import { Problem } from "@/types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  problems: Problem[];
}
export default function ProblemsArea(props: Props) {
  return (
    <LinearContainer
      fullheight
      fullwidth
      classnames={{
        wrapper: "overflow-hidden flex-1",
      }}
      label={
        <div className="gap-0 flex flex-row justify-between w-full">
          <h1 className="text-2xl font-bold text-foreground">Problems</h1>
          <Link className="text-sm text-foreground-500" href={`/problems`}>
            See all
          </Link>
        </div>
      }
      labelSize="2xl"
    >
      <ProblemsTable problems={props.problems} />
    </LinearContainer>
  );
}
