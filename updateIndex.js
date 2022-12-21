const fs = require("fs");
const readline = require("readline");
const logger = fs.createWriteStream("./customFootprints/index.js", {
  flags: "a", // 'a' means appending (old data will be preserved)
});

const content =
  "\tbat: require('./bat'),\n\tb3u1000p: require('./b3u1000p'),\n\tpcm12: require('./pcm12'),\n\tpromicro_pretty: require('./promicro_pretty'),\n\tpi_pico: require('./pi_pico')\n }";

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
      logger.write(`\n${content}`);
    } else {
      logger.write(`\n${line}`);
    }
  }
}

processLineByLine();
