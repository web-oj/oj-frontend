import { LinearContainer, PageContainer } from "@/components/ui";
import { ContestsTableWrapper } from "./components/contests-table";

export default function Page() {
    return (
        <PageContainer
            title="Contests"
        >
            <LinearContainer
                fullwidth
                fullheight
            >
                <ContestsTableWrapper />
            </LinearContainer>
        </PageContainer>
    );
} 