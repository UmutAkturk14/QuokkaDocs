import React, { useState } from "react";
import DocSidebar from "@components/Sidebar/DocSidebar";
import DocContent from "@components/Content/DocContent";
import { modules, functions } from "../../data/documentation";

const DocPage = () => {
  const [activeFunctionId, setActiveFunctionId] = useState<string | null>(null);

  return (
    <div className="flex min-h-[100svh] bg-[#f9f6f1] text-stone-800">
      {/* Sidebar */}
      <aside className="w-1/6 select-none bg-[#fef9ee] border-r border-[#ddd0c0] p-4 overflow-y-auto shadow-inner">
        <DocSidebar
          modules={modules}
          functions={functions}
          activeFunctionId={activeFunctionId}
          onSelectFunction={setActiveFunctionId}
        />
      </aside>

      {/* Content */}
      <main className="w-5/6 p-6 bg-[#fdfcfa] shadow-[inset_0_1px_0_#e7ddd2]">
        <DocContent functions={functions} activeFunctionId={activeFunctionId} />
      </main>
    </div>
  );
};

export default DocPage;
