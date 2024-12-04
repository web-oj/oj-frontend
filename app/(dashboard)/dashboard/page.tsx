import ContestsArea from "./components/ContestsArea";
import ProblemsArea from "./components/ProblemsArea";
import LeaderboardArea from "./components/LeaderboardArea";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer
      className="h-fit overflow-y-auto"
      label={
        <div className="gap-0 flex flex-col">
          <p className="text-lg text-foreground">Welcome to the dashboard!</p>
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        </div>
      }
    >
      <LinearContainer
        fullheight
        fullwidth
        classnames={{
          wrapper: "py-4",
        }}
        direction="row"
      >
        <LinearContainer
          fullheight
          classnames={{
            wrapper: "overflow-y-auto flex-[3]",
          }}
          direction="column"
        >
          <ContestsArea />
          <ProblemsArea />
        </LinearContainer>
        <LeaderboardArea className="hidden lg:flex" />
      </LinearContainer>
    </PageContainer>
  );
}
