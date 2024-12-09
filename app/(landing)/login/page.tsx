import GuardWrapper from "./components/GuardWrapper";
import LoginFormWrapper from "./components/login-form";

import { PageContainer } from "@/components/ui";

export default function Home() {
  return (
    <GuardWrapper>
      <PageContainer isCenteredX>
        <LoginFormWrapper />
      </PageContainer>
    </GuardWrapper>
  );
}
