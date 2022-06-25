"use strict";

import chalk from "chalk";
import Style from "./style.js";

const style = new Style();

const help = () => {
  console.log(`Program usage:
  Use <output> <color> to set a color of the output, use restore instead of color for default settings
  Use <print> <string> to print a sring in set color
  Use <exit> to exit the program`);
};

const output = (arg) => {
  if (arg == "restore") {
    style.style = null;
    return;
  }

  const color = chalk[arg];
  if (color) {
    style.style = color;
    console.log(style.applyStyle("Color was applied!"));
  } else {
    return new Error("The color can not be applied...");
  }
};

const print = (string) => {
  if (style.style) console.log(style.applyStyle(string));
  else console.log(string);
};

const exit = () => {
  console.log("Exiting the program...");
  process.exit(0);
};

export default { help, output, print, exit };
