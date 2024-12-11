"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import React from "react";

import { LinearContainer } from "../ui";

import { useAuth } from "@/app/context";

interface CookieConsentProps { }

const CookieConsent: React.FC<CookieConsentProps> = () => {
  const { showCookieConsent, allowCookies, declineCookies } = useAuth();
  const { isOpen } = useDisclosure();

  return (
    <Modal
      hideCloseButton
      backdrop="transparent"
      isOpen={showCookieConsent}
      placement="bottom"
      size="2xl"
      classNames={{
        wrapper: "pointer-events-none",
      }}
    >
      <ModalContent className="pointer-events-auto">
        <ModalBody className="flex flex-row py-4">
          <Image height={32} src="/cookie.svg" width={32} />
          <p className="w-full break-words text-sm te-fo-10">
            We use cookies to improve your experience. By using our site, you
            agree to our use of cookies.
          </p>
          <LinearContainer>
            <Button radius="full" variant="bordered" onClick={declineCookies}>
              Decline
            </Button>
            <Button color="primary" radius="full" onClick={allowCookies}>
              Accept
            </Button>
          </LinearContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CookieConsent;
