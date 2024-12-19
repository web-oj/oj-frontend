import LeaderboardTable from "./RankingTable";

interface LeaderboardTableWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export function LeaderboardTableWrapper(props: LeaderboardTableWrapperProps) {
  return (
    <>
      <LeaderboardTable />
    </>
  );
}
