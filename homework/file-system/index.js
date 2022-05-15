const util = require("./util.js");
const {writeFile, createArr, sortArr} = require("./util");
const array = ['Vazgen', 'Gurgen', 'Elena', 'Aida'];
util.writeFile('./homework/file-system/file.txt', array, 'utf-8');
const arr = createArr('./homework/file-system/file.txt', 'utf-8');
sortArr(arr);