const XLSX = require('xlsx');
const express = require('express');
const app = express();
const PORT = 3000;
const PATH = './homework/excel/data.xlsx';

app.listen(PORT, () => {
    console.log('Server running on port:' + PORT);
});

const workbook = XLSX.readFile(PATH);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const excelData = XLSX.utils.sheet_to_json(worksheet);

app.get('/', ((req, res) => {
    res.status(200).send(excelData);
}));