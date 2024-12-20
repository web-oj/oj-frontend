import { useContest } from "@/app/(dashboard)/contests/context";
import { LinearContainer } from "@/components/ui";
import { Link } from "@nextui-org/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function Moss(props: Props) {
    const { data: contest } = useContest();

    return (
        <LinearContainer isCenteredX fullwidth fullheight direction="column">
            {contest.mossUrl && (
                <Link
                    href={contest.mossUrl}
                    target="_blank"
                    className="underline text-blue-500"
                >
                    Open in new tab
                </Link>
            )}
            <iframe
                src={contest.mossUrl}
                className="w-full h-full bg-foreground-50 rounded-large p-6"
            />
        </LinearContainer>
    );
}