var fs = require("fs");
var trivia = require("./trivia.json");

fs.writeFileSync("trivia.json", JSON.stringify(trivia, null, 2));