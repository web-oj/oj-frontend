import Providers from "./providers";
import { LinearContainer, PageContainer } from "@/components/ui";
import { UserHeader } from "./components/header";
import ContactsArea from "./components/contacts-area";
export default function Page() {
    return (
        <Providers>
            <PageContainer
                isCenteredX
            >
                <LinearContainer
                    direction="column"
                    space="lg"
                    classnames={{
                        wrapper: "overflow-y-auto bg-foreground-100 rounded-large p-4 max-w-screen-sm",
                    }}
                    fullwidth
                >
                    <UserHeader />
                    <ContactsArea />
                </LinearContainer>
            </PageContainer>
        </Providers>
    );
} 