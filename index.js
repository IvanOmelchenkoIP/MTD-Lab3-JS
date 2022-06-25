"use strict";

import readlineSync from "readline-sync";
import handleInput from "./src/inputHandler.js";

while (true) {
  const input = readlineSync.question("Enter command (use <help> to find out more): ");
  const err = handleInput(input);
  if (err) console.error(err);
}
