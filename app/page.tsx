"use client";

import { LinearContainer, PageContainer } from "@/components/ui";
import { Button } from "@nextui-org/react";
import { ArrowRight01Icon } from "hugeicons-react";
import { Hero } from "./components/Hero";

export default function Home() {

  return <PageContainer isCentered>
    <Hero />
  </PageContainer>;
}
