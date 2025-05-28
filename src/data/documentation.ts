export interface DocFunction {
  id: string;
  name: string;
  module: string;
  signature: string;
  description: string;
  example: string; // ← new field for code snippet
}

export interface DocModule {
  id: string;
  name: string;
  description: string;
  functions: string[]; // list of function IDs in this module
}

export const modules: DocModule[] = [
  {
    id: "math",
    name: "Math",
    description: "Basic math functions",
    functions: ["add", "subtract"],
  },
  {
    id: "string",
    name: "String",
    description: "String manipulation functions",
    functions: ["concat"],
  },
];

export const functions: DocFunction[] = [
  {
    id: "add",
    name: "add",
    module: "math",
    signature: "add(a: number, b: number): number",
    description: "Adds two numbers.",
    example: `add(2, 3) // 5`,
  },
  {
    id: "subtract",
    name: "subtract",
    module: "math",
    signature: "subtract(a: number, b: number): number",
    description: "Subtracts second number from first.",
    example: `subtract(5, 2) // 3`,
  },
  {
    id: "concat",
    name: "concat",
    module: "string",
    signature: "concat(a: string, b: string): string",
    description: "Concatenates two strings.",
    example: `concat("hello", " world") // "hello world"`,
  },
];
