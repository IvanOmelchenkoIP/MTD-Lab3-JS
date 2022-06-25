"use strict";

import readlineSync from "readline-sync";
import handleInput from "./src/inputHandler.js";

while (true) {
  const input = readlineSync.question("Enter command: ");
  handleInput(input);
}
