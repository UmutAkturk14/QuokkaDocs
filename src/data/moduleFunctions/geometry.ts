import type { DocFunction } from "../../types/documentation";

export const geometryFunctions: DocFunction[] = [
  {
    id: "width",
    name: "width",
    module: "geometry",
    signature: "width(): number",
    description:
      "Returns the width of the first matched element, excluding padding, border, and margin.",
    example: `const w = $('.element').width()`,
  },
  {
    id: "height",
    name: "height",
    module: "geometry",
    signature: "height(): number",
    description:
      "Returns the height of the first matched element, excluding padding, border, and margin.",
    example: `const h = $('.element').height()`,
  },
  {
    id: "innerWidth",
    name: "innerWidth",
    module: "geometry",
    signature: "innerWidth(): number",
    description:
      "Returns the width of the first matched element, including padding but excluding border and margin.",
    example: `const iw = $('.element').innerWidth()`,
  },
  {
    id: "innerHeight",
    name: "innerHeight",
    module: "geometry",
    signature: "innerHeight(): number",
    description:
      "Returns the height of the first matched element, including padding but excluding border and margin.",
    example: `const ih = $('.element').innerHeight()`,
  },
  {
    id: "outerWidth",
    name: "outerWidth",
    module: "geometry",
    signature: "outerWidth(includeMargin?: boolean): number",
    description:
      "Returns the width of the first matched element, including padding and border. If `includeMargin` is true, includes margin as well.",
    example: `const ow = $('.element').outerWidth()\nconst owMargin = $('.element').outerWidth(true)`,
  },
  {
    id: "outerHeight",
    name: "outerHeight",
    module: "geometry",
    signature: "outerHeight(includeMargin?: boolean): number",
    description:
      "Returns the height of the first matched element, including padding and border. If `includeMargin` is true, includes margin as well.",
    example: `const oh = $('.element').outerHeight()\nconst ohMargin = $('.element').outerHeight(true)`,
  },
  {
    id: "offset",
    name: "offset",
    module: "geometry",
    signature: "offset(): { top: number; left: number }",
    description:
      "Gets the current coordinates of the first matched element relative to the document.",
    example: `const pos = $('.element').offset()\nconsole.log(pos.top, pos.left)`,
  },
  {
    id: "position",
    name: "position",
    module: "geometry",
    signature: "position(): { top: number; left: number }",
    description:
      "Gets the current coordinates of the first matched element relative to its offset parent.",
    example: `const pos = $('.element').position()\nconsole.log(pos.top, pos.left)`,
  },
  {
    id: "offsetTop",
    name: "offsetTop",
    module: "geometry",
    signature: "offsetTop(): number",
    description:
      "Returns the top offset (distance from the top of the document) of the first matched element.",
    example: `const top = $('.element').offsetTop()`,
  },
  {
    id: "offsetLeft",
    name: "offsetLeft",
    module: "geometry",
    signature: "offsetLeft(): number",
    description:
      "Returns the left offset (distance from the left of the document) of the first matched element.",
    example: `const left = $('.element').offsetLeft()`,
  },
  {
    id: "scrollTop",
    name: "scrollTop",
    module: "geometry",
    signature: "scrollTop(value?: number): Core | number",
    description:
      "Gets or sets the vertical scroll position of the matched elements.",
    example: `const st = $('.element').scrollTop()\n$('.element').scrollTop(100)`,
  },
  {
    id: "scrollLeft",
    name: "scrollLeft",
    module: "geometry",
    signature: "scrollLeft(value?: number): Core | number",
    description:
      "Gets or sets the horizontal scroll position of the matched elements.",
    example: `const sl = $('.element').scrollLeft()\n$('.element').scrollLeft(50)`,
  },
  {
    id: "scrollWidth",
    name: "scrollWidth",
    module: "geometry",
    signature: "scrollWidth(): number",
    description:
      "Returns the total scrollable width of the first matched element, including content not visible on screen.",
    example: `const sw = $('.element').scrollWidth()`,
  },
  {
    id: "scrollHeight",
    name: "scrollHeight",
    module: "geometry",
    signature: "scrollHeight(): number",
    description:
      "Returns the total scrollable height of the first matched element, including content not visible on screen.",
    example: `const sh = $('.element').scrollHeight()`,
  },
  {
    id: "isInViewport",
    name: "isInViewport",
    module: "geometry",
    signature: "isInViewport(): boolean",
    description:
      "Returns `true` if the first matched element is currently visible within the viewport.",
    example: `if ($('.element').isInViewport()) { console.log('Visible') }`,
  },
  {
    id: "rect",
    name: "rect",
    module: "geometry",
    signature: "rect(): DOMRect",
    description:
      "Returns a `DOMRect` object providing information about the size and position of the first matched element.",
    example: `const r = $('.element').rect()\nconsole.log(r.top, r.left, r.width, r.height)`,
  },
];
