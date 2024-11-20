import LeaderboardTable from "./LeaderboardTable";

interface LeaderboardTableWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
}
export function LeaderboardTableWrapper(props: LeaderboardTableWrapperProps) {
    return (
        <>
            <LeaderboardTable />
        </>
    )
}