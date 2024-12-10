"use client";

import { GoogleIcon, IdIcon, MentorIcon } from "hugeicons-react";

import { useUser } from "../../context";

import { Field, LinearContainer } from "@/components/ui";

export interface ContactsAreaProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export default function ContactsArea(props: ContactsAreaProps) {
  const { data: user } = useUser();

  return (
    <LinearContainer fullwidth direction="column" title="Contacts" className="bg-foreground-50 rounded-2xl p-4 shadow-sm max-w-screen-sm" {...props}>
      <Field
        classNames={{
          value: "text-foreground-500",
        }}
        icon={<GoogleIcon className="text-foreground-500" size={16} />}
        label="Email"
        showLabel={false}
        value={user?.email}
      />
      <Field
        classNames={{
          value: "text-foreground-500",
        }}
        icon={<MentorIcon className="text-foreground-500" size={16} />}
        label="Role"
        showLabel={false}
        value={user?.role}
      />
      <Field
        classNames={{
          value: "text-foreground-500",
        }}
        icon={<IdIcon className="text-foreground-500" size={16} />}
        label="Username"
        showLabel={false}
        value={user?.userName}
      />
    </LinearContainer>
  );
}
