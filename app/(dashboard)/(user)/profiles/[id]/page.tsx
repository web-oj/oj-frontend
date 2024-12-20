import { PageContainer, LinearContainer } from "@/components/ui";
import { getUserById } from "@/fetch-functions";
import { notFound } from "next/navigation";
import ActivitiesArea from "../../profile/components/ActivitiesArea";
import ContactsArea from "../../profile/components/ContactsArea";
import { ProfileArea } from "../../profile/components/ProfileArea";
import Providers from "./providers";

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
          <ProfileArea />
          <ActivitiesArea />
          <ContactsArea />
        </LinearContainer>
      </PageContainer>
    </Providers>
  );
}
