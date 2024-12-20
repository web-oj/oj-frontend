import { PageContainer, LinearContainer } from "@/components/ui";
import { getUserById } from "@/fetch-functions";
import { notFound } from "next/navigation";

import Providers from "./providers";
import { ProfileArea } from "./components/ProfileArea";
import ActivitiesArea from "./components/ActivitiesArea";
import ContactsArea from "./components/ContactsArea";

interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const fetchProfile = async () => {
    try {
      const user = await getUserById({ id: parseInt(params.id) });

      return user;
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  }

  const user = await fetchProfile();

  if (!user) {
    notFound();
  }

  return (
    <Providers user={user}>
      <PageContainer isCenteredX>
        <LinearContainer
          fullheight
          fullwidth
          classnames={{
            wrapper: "overflow-y-hidden",
          }}
          direction="row"
          space="lg"
        >
          <ProfileArea user={user} />
          <ActivitiesArea user={user} />
          <ContactsArea user={user} />
        </LinearContainer>
      </PageContainer>
    </Providers>
  );
}
