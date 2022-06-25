"use strict";

const help = () => {
  console.log(`Program usage:
  Use <output> <color> to set a color of the output, use restore instead of color for default settings
  Use <print> <string> to print a sring in set color
  Use <exit> to exit the program`);
};

const output = (color) => {
  return;
};

const print = (string) => {
  console.log(string)
};

const exit = () => {
  console.log("Exiting the program...");
  process.exit(0);
};

export default { help, output, print, exit };
