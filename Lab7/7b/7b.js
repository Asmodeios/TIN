const fs = require('fs');
require('log-timestamp');
let args = process.argv.slice(2);

const testFolder = args[0];

fs.watch(testFolder , (eventType, filename) => {
  console.log(`${eventType}d ${filename}`);
  fs.readFile(testFolder + filename, 'utf-8', (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(data);
    }
  });
});
