var fs=require('fs');

console.log('now reading file using nonblocking...');

fs.readFile('info.txt', (err,data)=>{
    console.log('after reading completed...');
    console.log('now the data from file...');
    console.log(data.toString());
});

console.log('some other code to run after calling readFile...');
console.log('without blocking its running...');
console.log('reaching till end...');
console.log('ok');