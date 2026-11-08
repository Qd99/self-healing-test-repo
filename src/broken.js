import fs from "fs";

const unusedVariable = 42;
fs.writeSync(1, String(unusedVariable));
