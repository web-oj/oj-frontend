"use client";

import { useAuth } from "@/app/context";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Image } from "@nextui-org/react";
import React from "react";
import { LinearContainer } from "../ui";

interface CookieConsentProps {
}

const CookieConsent: React.FC<CookieConsentProps> = () => {
    const { showCookieConsent, allowCookies } = useAuth();
    const { onClose, isOpen } = useDisclosure();

    return (
        <Modal
            isOpen={showCookieConsent && !isOpen}
            size="2xl"
            placement="bottom"
            backdrop="transparent"
            hideCloseButton
        >
            <ModalContent>
                <ModalBody className="flex flex-row py-4">
                    <Image src="/cookie.svg" width={32} height={32} />
                    <p className="w-full break-words text-sm te-fo-10">We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
                    <LinearContainer>
                        <Button onClick={onClose} radius="full" variant="bordered">Decline</Button>
                        <Button onClick={allowCookies} radius="full" color="primary">Accept</Button>
                    </LinearContainer>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CookieConsent;
