const fs = require("fs");
const readline = require("readline");
const logger = fs.createWriteStream("./customFootprints/index.js", {
  flags: "a", // 'a' means appending (old data will be preserved)
});

const content =
  "\t,b3u1000p: require('./b3u1000p'),\n\tpcm12: require('./pcm12'),\n\tpromicro_pretty: require('./promicro_pretty'),\n\tpi_pico: require('./pi_pico')\n }";

async function processLineByLine() {
  const fileStream = fs.createReadStream(
    "./node_modules/ergogen/src/footprints/index.js"
  );

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (line.trim() === "}") {
      console.log(`Updating content`);
      logger.write(`\n${content}`);
    } else {
      logger.write(`\n${line}`);
    }
    console.log(`${line}`);
  }
}

processLineByLine();
