
import { LinearContainer, PageContainer } from "@/components/ui";
import LeaderboardTable from "./components/leaderboard-table/LeaderboardTable";

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
        <LeaderboardTable />
      </LinearContainer>
    </PageContainer>
  );
}
