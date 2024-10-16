import CustomEditor from "./editor";
import Toolbar from "./editor/components/Toolbar";

export default function IDE() {
    return (
        <div className="w-full">
            <Toolbar />
            <CustomEditor />
        </div>
    )
}