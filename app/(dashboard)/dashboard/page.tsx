import { getAllContests, getAllProblems } from "@/fetch-functions";
import ContestsArea from "./components/ContestsArea";
import ProblemsArea from "./components/ProblemsArea";

import { LinearContainer, PageContainer } from "@/components/ui";

export default async function Page() {
  const problems = await getAllProblems();
  const contests = await getAllContests();

  return (
    <PageContainer
      className="flex-1 overflow-hidden"
      label={
        <div className="gap-0 flex flex-col">
            <p className="text-lg text-foreground">👋 Welcome to the dashboard</p>
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        </div>
      }
    >
      <LinearContainer
        fullheight
        fullwidth
        classnames={{
          wrapper: "py-4 flex-[2] overflow-hidden",
        }}
        direction="row"
      >
        <ContestsArea contests={contests} />
        <ProblemsArea problems={problems} />
      </LinearContainer>
    </PageContainer>
  );
}
