import React from "react";
import type { DocFunction } from "../../data/documentation";
import CodeBlock from "./CodeBlock";

interface DocContentProps {
  functions: DocFunction[];
  activeFunctionId: string | null;
}

const DocContent: React.FC<DocContentProps> = ({
  functions,
  activeFunctionId,
}) => {
  const func = functions.find((f) => f.id === activeFunctionId);

  if (!func) {
    return (
      <div className="p-6 text-center text-gray-500 italic">
        Select a function from the sidebar to view its details.
      </div>
    );
  }

  const { id, name, module, signature, description, example } = func;

  return (
    <div key={id} className="p-6 space-y-6">
      <header className="space-y-1">
        <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Module:</span>{" "}
          <span className="text-indigo-600">{module}</span>
        </p>
      </header>

      <section className="space-y-2">
        <p className="text-base text-gray-700">{description}</p>
        <div>
          <span className="font-medium text-gray-700">Signature:</span>{" "}
          <code className="bg-gray-100 text-sm text-gray-800 px-2 py-1 rounded">
            {signature}
          </code>
        </div>
      </section>

      {example && (
        <section className="space-y-2">
          <p className="font-medium text-gray-700">Example:</p>
          <CodeBlock code={example} language="typescript" />
        </section>
      )}
    </div>
  );
};

export default DocContent;
