const fs = require("fs");
const readline = require("readline");
const logger = fs.createWriteStream(
  "./node_modules/ergogen/src/footprints/index.js",
  {
    flags: "w", // 'a' means appending (old data will be preserved)
  }
);

async function processLineByLine() {
  const fileStream = fs.createReadStream("./customFootprints/index.js");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    logger.write(`\n${line}`);
    console.log(`${line}`);
  }
}

processLineByLine();
