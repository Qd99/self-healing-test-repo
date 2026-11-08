import fs from "fs";

const unusedVariable = 42;

function undefinedFunction(value) {
  return value;
}

fs.writeSync(1, `${undefinedFunction(unusedVariable)}\n`);
