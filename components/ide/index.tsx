"use client";

import { Splitter, SplitterPanel } from "primereact/splitter";

import IDEEditor from "./editor";
import Toolbar from "./editor/components/Toolbar";
import IDEOutput from "./output";

import { LinearContainer } from "@/components/ui/container/LinearContainer";

interface IDEProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "horizontal" | "vertical";
}
export default function IDE(props: IDEProps) {
  const { layout = "horizontal" } = props;

  return (
    <LinearContainer fullheight fullwidth direction="column" space="lg">
      <Toolbar />
      <Splitter className="w-full h-full" layout={layout}>
        <SplitterPanel size={60}>
          <IDEEditor />
        </SplitterPanel>
        <SplitterPanel size={40}>
          <IDEOutput />
        </SplitterPanel>
      </Splitter>
    </LinearContainer>
  );
}
