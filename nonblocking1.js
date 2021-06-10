var fs=require('fs');

console.log('now reading file using nonblocking...');
fs.readFile('info.txt', function(err,data){
    //this is the body of callback function which will be called after readFile has completed its execution
    //here you can write code which you want to execute after reading is completed.
    //its not going to block the execution, so next statement will finish mean while reading is going on
    console.log('after reading completed...');
    console.log('now the data from file...');
    console.log(data.toString());
    //console.log(err);
});

console.log('some other code to run after calling readFile...');
console.log('without blocking its running...');
console.log('reaching till end...');