import Link from "next/link";

import { ProblemsTableWrapper } from "../../problems/components/problems-table";

import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function ProblemsArea(props: Props) {
  return (
    <LinearContainer
      fullwidth
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
      <ProblemsTableWrapper />
    </LinearContainer>
  );
}
