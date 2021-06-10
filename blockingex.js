var fs=require('fs');

var data=fs.readFileSync('info.txt');
console.log(data.toString());
console.log('after reading the file...');
console.log('some more job to do...');
console.log('now its end...');

