const XLSX = require('xlsx');

const workbook = XLSX.readFile('./homework/excel/data.xlsx');

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

for (let i = 2; i < 7; i++) {
    const name = worksheet[`A${i}`].v;
    const surname = worksheet[`B${i}`].v;
    const email = worksheet[`C${i}`].v;
    const phone = worksheet[`D${i}`].v;
    const age = worksheet[`E${i}`].v;
    const grade = worksheet[`F${i}`].v;
    console.log({
        name: name, surname: surname, email: email, phone: phone, age: age, grade: grade
    });
}

