import Providers from "./providers";
import { UserHeader } from "./components/header";
import ContactsArea from "./components/contacts-area";

import { LinearContainer, PageContainer } from "@/components/ui";
export default function Page() {
  return (
    <Providers>
      <PageContainer isCenteredX>
        <LinearContainer
          fullwidth
          classnames={{
            wrapper:
              "overflow-y-auto bg-foreground-100 rounded-large p-4 max-w-screen-sm",
          }}
          direction="column"
          space="lg"
        >
          <UserHeader />
          <ContactsArea />
        </LinearContainer>
      </PageContainer>
    </Providers>
  );
}
