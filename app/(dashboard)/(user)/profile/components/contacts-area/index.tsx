"use client";

import { Field, LinearContainer } from "@/components/ui";
import { useUser } from "../../../context";
import { GoogleIcon, IdIcon, MentorIcon } from "hugeicons-react";

export interface ContactsAreaProps extends React.HTMLAttributes<HTMLDivElement> {
}
export default function ContactsArea(props: ContactsAreaProps) {
    const { data: user } = useUser();

    return (
        <LinearContainer
            title="Contacts"
            direction="column"
            fullwidth
        >
            <Field
                label="Email"
                showLabel={false}
                icon={<GoogleIcon className="text-foreground-500" size={16} />}
                value={user?.email}
                classNames={{
                    value: "text-foreground-500"
                }}
            />
            <Field
                label="Role"
                showLabel={false}
                icon={<MentorIcon className="text-foreground-500" size={16} />}
                value={user?.role}
                classNames={{
                    value: "text-foreground-500"
                }}
            />
            <Field
                label="Username"
                showLabel={false}
                icon={<IdIcon className="text-foreground-500" size={16} />}
                value={user?.user_name}
                classNames={{
                    value: "text-foreground-500"
                }}
            />
        </LinearContainer>
    )
}