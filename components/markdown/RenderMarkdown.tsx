import "./styles.css";

import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { twMerge } from "tailwind-merge";

export interface RenderMarkdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: string;
}
export function RenderMarkdown(props: RenderMarkdownProps) {
  const { data, className } = props;

  return (
    <ReactMarkdown
      className={twMerge("markdown", className)}
      {...props}
      rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight]}
      remarkPlugins={[remarkMath, remarkBreaks, remarkGfm]}
    >
      {data}
    </ReactMarkdown>
  );
}
