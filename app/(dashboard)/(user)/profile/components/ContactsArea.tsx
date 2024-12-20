"use client";

import { GoogleIcon, MentorIcon, ProgrammingFlagIcon } from "hugeicons-react";

import { Field, LinearContainer } from "@/components/ui";
import { useAuth } from "@/app/context";

import { Image } from "@nextui-org/react";

export interface ContactsAreaProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export default function ContactsArea(props: ContactsAreaProps) {
  const { user } = useAuth();
  const items = [
    {
      icon: <GoogleIcon className="text-foreground-500" size={16} />,
      label: "Email",
      value: user?.email || "-",
    },
    {
      icon: <MentorIcon className="text-foreground-500" size={16} />,
      label: "Role",
      value: user?.role || "-",
    },
    {
      icon: <ProgrammingFlagIcon className="text-foreground-500" size={16} />,
      label: "Country",
      value: <Image src={`https://flagcdn.com/w320/vn.png`} radius="full" width={16} height={16} alt={user?.country || "Vietnam"} />,
    },
  ];

  return (
    <LinearContainer
      fullwidth
      className="bg-foreground-50 rounded-2xl p-4 shadow-sm max-w-64"
      direction="column"
      title="Contacts"
      {...props}
    >
      {items.map((item, index) => (
        <Field
          key={index}
          classNames={{
            value: "text-foreground-500",
          }}
          icon={item.icon}
          label={item.label}
          showLabel={false}
          value={item.value}
        />
      ))}
    </LinearContainer>
  );
}
