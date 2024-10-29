import { LinearContainer } from "@/components/ui";
import ContestsTable from "./ContestsTable";

interface ContestsTableWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
}
export function ContestsTableWrapper(props: ContestsTableWrapperProps) {
    return (
        <>
            <ContestsTable />
        </>
    )
}