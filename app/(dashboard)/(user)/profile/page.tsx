import ActivitiesArea from "./components/ActivitiesArea";
import ContactsArea from "./components/ContactsArea";
import { ProfileArea } from "./components/ProfileArea";
import Providers from "./providers";



import { LinearContainer, PageContainer } from "@/components/ui";
export default function Page() {
  return (
    <Providers>
      <PageContainer isCenteredX>
        <LinearContainer
          fullwidth
          fullheight
          classnames={{
            wrapper:
              "overflow-y-auto",
          }}
          direction="row"
          space="lg"
        >
          <ProfileArea />
          <ActivitiesArea />
          <ContactsArea />
        </LinearContainer>
      </PageContainer>
    </Providers>
  );
}
