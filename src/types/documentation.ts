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
  functions: string[]; // list of function IDs in Core module
}
