import { LeaderboardTableWrapper } from "./components/leaderboard-table";

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
        <LeaderboardTableWrapper />
      </LinearContainer>
    </PageContainer>
  );
}
