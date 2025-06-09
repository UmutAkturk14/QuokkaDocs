import type { DocModule } from "../../types/documentation";

export const geometryModule: DocModule = {
  id: "geometry",
  name: "Geometry",
  description:
    "Methods for querying element dimensions, position, scroll, and visibility.",
  functions: [
    "width",
    "height",
    "innerWidth",
    "innerHeight",
    "outerWidth",
    "outerHeight",
    "offset",
    "position",
    "offsetTop",
    "offsetLeft",
    "scrollTop",
    "scrollLeft",
    "scrollWidth",
    "scrollHeight",
    "isInViewport",
    "rect",
  ],
};
