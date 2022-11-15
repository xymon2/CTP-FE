import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cb } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ProblemDescriptionProps {
  mdString: string;
}

const ProblemDescription: FC<ProblemDescriptionProps> = ({ mdString }) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          console.log(match);
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={cb}
              customStyle={{ fontSize: 14 }}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {mdString}
    </ReactMarkdown>
  );
};

export default ProblemDescription;
