import { useContest } from "@/app/(dashboard)/contests/context";
import { LinearContainer } from "@/components/ui";
import { Button, Link } from "@nextui-org/react";
import { runMoss } from "@/fetch-functions";
import { toast } from "react-toastify";
interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function Moss(props: Props) {
    const { data: contest } = useContest();

    const run = async () => {
        if (!contest.id) return;

        try {
            await runMoss({
                contestId: contest.id,
            });

            toast.success("MOSS has been run successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to run MOSS. Please try again");
        }
    }

    return (
        <LinearContainer isCenteredX fullwidth fullheight direction="column">
            <LinearContainer direction="row" space="sm">
                <Button radius="full" color="primary" onClick={run}>Run MOSS</Button>
                {contest.mossUrl && (
                    <Link
                        href={contest.mossUrl}
                        target="_blank"
                        className="underline text-blue-500"
                    >
                        Open in new tab
                    </Link>
                )}
            </LinearContainer>

            <iframe
                title="MOSS Report"
                src={contest.mossUrl}
                className="w-full h-full bg-foreground-50 rounded-large p-6"
            />
        </LinearContainer>
    );
}