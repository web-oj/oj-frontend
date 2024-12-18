"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context";

interface Props extends React.PropsWithChildren {}

export default function GuardWrapper(props: Props) {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("/login");

    return null;
  }

  return <>{props.children}</>;
}
