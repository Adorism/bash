process.stdout.write("prompt >");

const cmd = data.toString().trim();
// const pwd = require("./pwd.js");
// const ls = require("./ls.js");

if (cmd === "pwd") {
  const pwd = require("./pwd.js");
} else if (cmd === "ls") {
  const ls = require("./ls.js");
} else {
  process.stdout.write("You typed: " + cmd);
}
