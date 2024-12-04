import { LeaderboardTableWrapper } from "./components/leaderboard-table";
import Top3Area from "./components/Top3Area";

import { LinearContainer, PageContainer } from "@/components/ui";

export default function Page() {
  return (
    <PageContainer title="Leaderboard">
      <LinearContainer
        fullheight
        fullwidth
        classnames={{
          wrapper: "overflow-hidden",
        }}
        direction="column"
      >
        <Top3Area />
        <LeaderboardTableWrapper />
      </LinearContainer>
    </PageContainer>
  );
}
