import React, { useState } from "react";
import DocSidebar from "@components/Sidebar/DocSidebar";
import DocContent from "@components/Content/DocContent";
import { modules, functions } from "../../data/documentation";

const DocPage = () => {
  const [activeFunctionId, setActiveFunctionId] = useState<string | null>(null);

  return (
    <div className="flex">
      <div className="w-1/4 border-r-4 min-h-[100svh] p-4 overflow-y-auto">
        <DocSidebar
          modules={modules}
          functions={functions}
          activeFunctionId={activeFunctionId}
          onSelectFunction={setActiveFunctionId}
        />
      </div>
      <div className="w-3/4 p-6 overflow-y-auto">
        <DocContent functions={functions} activeFunctionId={activeFunctionId} />
      </div>
    </div>
  );
};

export default DocPage;
