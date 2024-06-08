//alert("Welcome to vring");
//name='rupam';
//console.log("name - ",name);
//typeof name;
//let str = "rupam";
//let sstr = `teri maa ka ${str}`;


const rupam = require("./second");
console.log("Hello ",rupam);

const fs = require("fs");
const a = fs.readFileSync('file.txt');
console.log(a.toString());
console.log("OK");

fs.writeFile('filetwo.txt',"This is a Data",()=>{
    console.log("Written");
});