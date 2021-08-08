const fs = require("fs");

module.export = fs.readdir("./", "utf8", function (err, file) {
  if (err) {
    throw err;
  } else {
    process.stdout.write(file.join("\n"));
    process.stdout.write("prompt > ");
  }
});