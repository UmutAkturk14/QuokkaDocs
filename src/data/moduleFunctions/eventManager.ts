import type { DocFunction } from "../../types/documentation";

export const eventManagerFunctions: DocFunction[] = [
  {
    id: "on",
    name: "on",
    module: "eventManager",
    signature: "on(event: string, callback: EventListener): Core",
    description:
      "Attaches an event listener to each matched element. Supports optional event namespaces (e.g., 'click.myNamespace').",
    example: `$('.element').on('click.namespace', (e) => console.log('Clicked with namespace'))`,
  },
  {
    id: "off",
    name: "off",
    module: "eventManager",
    signature: "off(event: string, callback?: EventListener): Core",
    description:
      "Removes event listeners from matched elements. Can remove by event type, namespace, and optionally by specific callback function.",
    example: [
      `// Remove all 'click' handlers`,
      `$('.element').off('click')`,
      ``,
      `// Remove handlers for specific namespace`,
      `$('.element').off('click.namespace')`,
      ``,
      `// Remove specific callback for an event`,
      `function handler(e) { console.log('Clicked'); }`,
      `$('.element').off('click', handler)`,
    ].join("\n"),
  },
  {
    id: "once",
    name: "once",
    module: "eventManager",
    signature: "once(event: string, callback: EventListener): Core",
    description:
      "Attaches an event listener that runs once and then removes itself. Supports optional namespaces.",
    example: `$('.element').once('click.namespace', (e) => console.log('Clicked once'))`,
  },
  {
    id: "trigger",
    name: "trigger",
    module: "eventManager",
    signature: "trigger(event: string, detail?: unknown): Core",
    description:
      "Triggers a custom event on each matched element, optionally passing custom data in `detail`. Namespace part of event name is ignored.",
    example: `$('.element').trigger('customEvent', { foo: 'bar' })`,
  },
];
