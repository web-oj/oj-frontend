"use client";

import { LinearContainer } from "@/components/ui/container/LinearContainer";
import CustomEditor from "./editor";
import Toolbar from "./editor/components/Toolbar";
import { IDEProvider } from "./context";

export default function IDE() {
    return (
        <LinearContainer direction="column" space="lg" fullWidth>
            <IDEProvider>
                <Toolbar />
                <CustomEditor />
            </IDEProvider>
        </LinearContainer>
    )
}