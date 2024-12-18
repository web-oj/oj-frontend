import ActivitiesArea from "./components/ActivitiesArea";
import ContactsArea from "./components/ContactsArea";
import { ProfileArea } from "./components/ProfileArea";

import { LinearContainer, PageContainer } from "@/components/ui";

export default async function Page() {
  return (
    <PageContainer isCenteredX>
      <LinearContainer
        fullheight
        fullwidth
        classnames={{
          wrapper: "overflow-y-auto",
        }}
        direction="row"
        space="lg"
      >
        <ProfileArea />
        <ActivitiesArea />
        <ContactsArea />
      </LinearContainer>
    </PageContainer>
  );
}
