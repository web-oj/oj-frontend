"use client";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import IDEEditor from "./editor";
import Toolbar from "./editor/components/Toolbar";
import { IDEProvider } from "./context";
import IDEOutput from "./output";

export default function IDE() {
    return (
        <LinearContainer direction="column" space="lg" fullWidth>
            <IDEProvider>
                <Toolbar />
                <LinearContainer fullWidth direction="row" space="lg">
                    <IDEEditor />
                    <IDEOutput />
                </LinearContainer>
            </IDEProvider>
        </LinearContainer>
    )
}