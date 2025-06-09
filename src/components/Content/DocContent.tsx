import React from "react";
import type { DocFunction } from "../../data/documentation";
import CodeBlock from "./CodeBlock";
import { Clipboard } from "lucide-react";

interface DocContentProps {
  functions: DocFunction[];
  activeFunctionId: string | null;
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-800">
    {children}
  </span>
);

const DocContent: React.FC<DocContentProps> = ({
  functions,
  activeFunctionId,
}) => {
  const func = functions.find((f) => f.id === activeFunctionId);

  if (!func)
    return (
      <div className="p-6 text-center text-gray-500 italic">
        Select a function from the sidebar to view its details.
      </div>
    );

  const { name, module, signature, description, example } = func;

  return (
    <div className="p-6 space-y-6">
      {/* title + module badge */}
      <header className="space-y-1">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
          {name} <Badge>{module}</Badge>
        </h2>
      </header>

      {/* description */}
      <p className="text-base text-gray-700">{description}</p>

      <div className="flex items-start gap-2">
        <span className="font-medium text-gray-700">Signature:</span>
        <pre className="relative rounded bg-gray-100 px-2 py-1 text-sm text-gray-800">
          <code>{signature}</code>
        </pre>
      </div>

      {/* example */}
      {example && (
        <section className="space-y-2" key={name}>
          <p className="font-medium text-gray-700">Example:</p>
          <CodeBlock
            code={example}
            language="typescript"
            collapsible
            initiallyOpen
          />
        </section>
      )}
    </div>
  );
};

export default DocContent;
