import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { Clipboard, Check, ChevronDown, ChevronRight } from "lucide-react";

type CodeBlockProps = {
  code: string;
  language?: string;
  collapsible?: boolean;
  initiallyOpen?: boolean;
};

const CodeBlock = ({
  code,
  language = "typescript",
  collapsible = false,
  initiallyOpen = true,
}: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(initiallyOpen);
  const [copied, setCopied] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string | number>("none");

  useEffect(() => {
    if (codeRef.current) hljs.highlightElement(codeRef.current);
  }, [code]);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  useEffect(() => {
    if (!collapsible) return;

    if (containerRef.current) {
      if (open) {
        setMaxHeight(containerRef.current.scrollHeight);
      } else {
        setMaxHeight(0);
      }
    }
  }, [open, collapsible]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => setCopied(true));
  };

  const CodeBody = (
    <pre
      ref={codeRef}
      className={`language-${language} relative rounded bg-gray-900 p-4 text-sm text-gray-100 overflow-x-auto`}
    >
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 rounded bg-gray-800 p-1 hover:bg-gray-700 transition-colors"
        title="Copy"
        type="button"
      >
        {copied ? <Check size={16} /> : <Clipboard size={16} />}
      </button>
      <code>{code}</code>
    </pre>
  );

  if (!collapsible) return CodeBody;

  return (
    <div className="rounded border-gray-300 dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-auto items-center justify-between
             px-2 py-1.5 text-sm font-medium
             text-violet-600 dark:text-violet-300
             bg-violet-50 dark:bg-violet-950
             hover:bg-violet-100 dark:hover:bg-violet-900
             rounded-md transition-colors duration-300 ease-in-out"
        type="button"
        aria-expanded={open}
        aria-controls="code-content"
      >
        <span>Code</span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      <div
        id="code-content"
        ref={containerRef}
        style={{
          maxHeight: maxHeight === "none" ? undefined : maxHeight,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {CodeBody}
      </div>
    </div>
  );
};

export default CodeBlock;
