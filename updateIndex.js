const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream(
    "./node_modules/ergogen/src/footprints/index.js"
  );

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if (line === "}") {
      console.log("Append Here");
    }
    console.log(`${line}`);
  }
}

processLineByLine();