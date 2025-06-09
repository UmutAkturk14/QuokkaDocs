import type { DocFunction, DocModule } from "../types/documentation";
import * as ModuleFunctions from "./moduleFunctions";

import * as Modules from "./modules";

export const modules: DocModule[] = Object.values(Modules);

export const functions: DocFunction[] = Object.values(ModuleFunctions).flat();
