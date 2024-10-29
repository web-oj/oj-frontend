import { LinearContainer, PageContainer } from "@/components/ui";
import { ProblemsTableWrapper } from "./components/problems-table";

export default function Page() {
    return (
        <PageContainer
            title="Problems"
        >
            <LinearContainer
                fullwidth
                fullheight
            >
                <ProblemsTableWrapper />
            </LinearContainer>
        </PageContainer>
    );
} 