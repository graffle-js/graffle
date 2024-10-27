import { createPrefilled } from "graffle/client";
import * as $$Data from "./data.js";
import * as $$SchemaDrivenDataMap from "./schema-driven-data-map.js";
export const create = createPrefilled($$Data.Name, $$SchemaDrivenDataMap.schemaDrivenDataMap, $$Data.defaultSchemaUrl);
