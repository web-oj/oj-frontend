"use client";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import IDEEditor from "./editor";
import Toolbar from "./editor/components/Toolbar";
import IDEOutput from "./output";
import { Splitter, SplitterPanel } from "primereact/splitter";

interface IDEProps extends React.HTMLAttributes<HTMLDivElement> {
    layout?: "horizontal" | "vertical";
}
export default function IDE(props: IDEProps) {
    const { layout = "horizontal" } = props;

    return (
        <LinearContainer direction="column" space="lg" fullwidth fullheight>
            <Toolbar />
            <Splitter layout={layout} className="w-full h-full">
                <SplitterPanel size={60}>
                    <IDEEditor />
                </SplitterPanel>
                <SplitterPanel size={40}>
                    <IDEOutput />
                </SplitterPanel>
            </Splitter>
        </LinearContainer>
    )
}