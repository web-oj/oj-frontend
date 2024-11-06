import { LinearContainer } from "@/components/ui";
import { mockUsers } from "@/mock";
import TopCard from "./top_card";

export default function Top3Area() {
    return (
        <LinearContainer direction="row" className="justify-between">
            <TopCard level="gold" user={mockUsers[0]} />
            <TopCard level="silver" user={mockUsers[1]} />
            <TopCard level="bronze" user={mockUsers[2]} />
        </LinearContainer>
    )
}