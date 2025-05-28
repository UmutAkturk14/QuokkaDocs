import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // You can choose a different theme if you'd like

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language = "typescript" }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre className="text-sm font-mono whitespace-pre overflow-x-auto rounded bg-gray-900 p-4">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
