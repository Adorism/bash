process.stdout.write("prompt >");
let cmd = '';
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
})

const pwd = require("./pwd.js");
const ls = require("./ls.js");

if (cmd.length > 0) {
    if (cmd === "pwd") {
        // const pwd = require("./pwd.js");
        pwd();
    } else if (cmd === "ls") {
        // const ls = require("./ls.js");
        ls();
    } else {
        process.stdout.write("You typed: " + cmd);
    }
}