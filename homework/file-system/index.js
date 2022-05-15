const util = require("./util.js");
let string = util.readFile('./homework/file-system/file.txt', 'utf-8');
let data = util.sortArr(string);
util.writeFile('./homework/file-system/file.txt', data, 'utf-8');
