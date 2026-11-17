#!/usr/bin/env node
import {runExternal} from "./external-tool.mjs";
runExternal("lekalo-typescript-hono", "scripts/gen-zod-golden.mjs");
