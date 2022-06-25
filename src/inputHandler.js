"use strict";

import commands from "./commands.js";

const handleInput = (input) => {
  const inputArr = input.split(" ");
  const request = inputArr.shift();
  const arg = inputArr.join(" ");
  const command = commands[request];
  if (command) {
    const err = command(arg);
    if (err) return err;
  } else {
    return new Error(
      "There is no such command! Use <help> to find out more..."
    );
  }
};

export default handleInput;
