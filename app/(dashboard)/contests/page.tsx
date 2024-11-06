import { LinearContainer, PageContainer } from "@/components/ui";
import { ContestsTableWrapper } from "./components/contests-table";

export default function Page() {
    return (
        <PageContainer
            title="Contests"
        >
            <LinearContainer
                className="overflow-hidden"
                fullwidth
                fullheight
            >
                <ContestsTableWrapper />
            </LinearContainer>
        </PageContainer>
    );
} 