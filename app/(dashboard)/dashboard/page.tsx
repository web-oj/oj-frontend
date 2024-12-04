import { LinearContainer, PageContainer } from "@/components/ui";
import ContestsArea from "./components/ContestsArea";
import ProblemsArea from "./components/ProblemsArea";
import LeaderboardArea from "./components/LeaderboardArea";

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
                classnames={{
                    wrapper: "py-4",
                }}
                direction="row"
                fullwidth
                fullheight
            >
                <LinearContainer
                    classnames={{
                        wrapper: "overflow-y-auto flex-[3]",
                    }}
                    direction="column"
                    fullheight
                >
                    <ContestsArea />
                    <ProblemsArea />
                </LinearContainer>
                <LeaderboardArea 
                    className="hidden lg:flex"
                />
            </LinearContainer>
        </PageContainer>
    )
}