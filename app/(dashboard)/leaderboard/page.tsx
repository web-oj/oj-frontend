import { LinearContainer, PageContainer } from "@/components/ui";
import { LeaderboardTableWrapper } from "./components/leaderboard-table";
import Top3Area from "./components/Top3Area";

export default function Page() {
    return (
        <PageContainer
            title="Leaderboard"
        >
            <LinearContainer
                classnames={{
                    wrapper: "overflow-hidden"
                }}
                direction="column"
                fullheight
                fullwidth
            >
                <Top3Area />
                <LeaderboardTableWrapper />
            </LinearContainer>
        </PageContainer>
    )
}