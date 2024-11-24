import TopCard from "./top_card";

import { LinearContainer } from "@/components/ui";
import { mockUsers } from "@/mock";

export default function Top3Area() {
  return (
    <LinearContainer className="justify-between" direction="row">
      <TopCard level="gold" user={mockUsers[0]} />
      <TopCard level="silver" user={mockUsers[1]} />
      <TopCard level="bronze" user={mockUsers[2]} />
    </LinearContainer>
  );
}
