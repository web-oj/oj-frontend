import "./styles.css";

import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from "rehype-highlight";

export interface RenderMarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
    data: string;
}
export function RenderMarkdown(props: RenderMarkdownProps) {
    const { data, className } = props;

    return (
        <ReactMarkdown
            rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight]}
            remarkPlugins={[remarkMath, remarkBreaks, remarkGfm]}
            className={"markdown " }
            children={data}
        />
    )
}