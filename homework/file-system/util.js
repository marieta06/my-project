const fs = require('fs');

function readFile(path, option) {
    let string = fs.readFileSync(path, option);
    return string;
}

function sortArr(string) {
    let arr = string.split(',');
    let sortArr = arr.sort((a, b) => {
        if (a < b) return -1;
        return 1;
    });
    return sortArr;
}

function writeFile(path, data, option) {
    let result = fs.writeFileSync(path, `${data}`, option);
    return result;
}

module.exports = {
    readFile, sortArr, writeFile
}