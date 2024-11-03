#!/usr/bin/env node

import { program } from "commander";
import { createRequire } from "module";

// Using version number from package.json
const require = createRequire(import.meta.url);
const { version } = require("./package.json");

program
  .version(version)
  .command("qwik-node-cli")
  .description(`Example Command`)
  .action(() => {
    console.log(`Welcome to the qwik-node-cli template, version ${version}`);
  })
  .parse();
