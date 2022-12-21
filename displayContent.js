const fs = require("fs");
const readline = require("readline");
console.log(process.argv[2]);

async function processLineByLine() {
  // const fileStream = fs.createReadStream(
  //   "./node_modules/ergogen/src/footprints/index.js"
  // );

  const fileStream = fs.createReadStream(process.argv[2]);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    console.log(`${line}`);
  }
}

processLineByLine();
