import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { DocModule, DocFunction } from "../../data/documentation";

interface DocSidebarProps {
  modules: DocModule[];
  functions: DocFunction[];
  activeFunctionId: string | null;
  onSelectFunction: (id: string) => void;
}

const DocSidebar: React.FC<DocSidebarProps> = ({
  modules,
  functions,
  activeFunctionId,
  onSelectFunction,
}) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState("");

  const view = useMemo(() => {
    const term = filter.toLowerCase();
    return modules
      .map((m) => {
        const allFuncs = functions.filter((f) => f.module === m.id);
        if (!term) return { module: m, funcs: allFuncs };
        const modMatch = m.name.toLowerCase().includes(term);
        const funcMatches = allFuncs.filter((f) =>
          f.name.toLowerCase().includes(term)
        );
        return modMatch || funcMatches.length
          ? { module: m, funcs: funcMatches }
          : null;
      })
      .filter(Boolean) as { module: DocModule; funcs: DocFunction[] }[];
  }, [modules, functions, filter]);

  const toggleModule = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const isOpen = (id: string) => (filter ? true : expanded.has(id));

  return (
    <div className="w-full px-3 py-4 text-sm">
      {/* Filter input */}
      <input
        type="text"
        placeholder="Filter functions..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Module list */}
      <nav className="space-y-4">
        {view.map(({ module, funcs }) => (
          <div key={module.id}>
            <button
              onClick={() => toggleModule(module.id)}
              className="flex w-full items-center justify-between rounded px-2 py-1 text-left font-semibold text-gray-700 hover:bg-gray-100"
            >
              <span>{module.name}</span>
              {isOpen(module.id) ? (
                <ChevronDown size={16} className="text-gray-500" />
              ) : (
                <ChevronRight size={16} className="text-gray-500" />
              )}
            </button>

            {isOpen(module.id) && (
              <ul className="mt-2 space-y-1 pl-4 border-l border-gray-200">
                {funcs.map((fn) => (
                  <li key={fn.id}>
                    <button
                      onClick={() => onSelectFunction(fn.id)}
                      className={`block w-full rounded px-2 py-1 text-left transition-colors ${
                        fn.id === activeFunctionId
                          ? "bg-blue-100 font-medium text-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    >
                      {fn.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default DocSidebar;
