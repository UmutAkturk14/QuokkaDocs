import type { DocModule } from "../../types/documentation";

export const eventManagerModule: DocModule = {
  id: "eventManager",
  name: "Event Manager",
  description:
    "Methods to attach, detach, trigger, and manage event listeners with optional namespaces.",
  functions: ["on", "off", "once", "trigger"],
};
