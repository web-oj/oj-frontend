import { LinearContainer } from "@/components/ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function ActivitiesArea(props: Props) {
    return (
        <LinearContainer
            fullheight
            direction="column"
            className="bg-black rounded-2xl !flex-1"
            {...props}
        >

        </LinearContainer>
    )
}