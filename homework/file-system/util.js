const fs = require('fs');

function writeFile(path, data, option) {
    let string = fs.writeFileSync(path, `${data}`, option);
    return string;
}

function createArr(path, option) {
    let string = fs.readFileSync(path, option);
    let arr = string.split(',');
    return arr;
}

function sortArr(arr) {
    let sortArr = arr.sort((a, b) => {
        if (a < b) return -1;
        return 1;
    });
    return sortArr;
}


module.exports = {
    createArr, sortArr, writeFile
};