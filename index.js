const fs = require("fs");
const parser = require("./lib/parser.js");

// get a list of all the files in the data directory
fs.readdir("./data", (err, items) => {
  items.map(i => {
    const file = `./data/${i}`;

    const buffer = fs.readFileSync(file);

    const data = parser.parse(buffer);

    console.log(file, JSON.stringify(data.header, null, 2));
  });
});
