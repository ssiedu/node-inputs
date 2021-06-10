var fs=require('fs');

console.log('now reading file using nonblocking...');

fs.readFile('info.txt', afterRead);

console.log('some other code to run after calling readFile...');
console.log('without blocking its running...');
console.log('reaching till end...');


function afterRead(err,data){
    console.log('now reading completed...');
    console.log(data.toString());
}