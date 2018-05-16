let fs = require('fs');

// Sync
console.log(1);
// 동기적으로 파일을 읽고 난 후 출력을 하라고 했으므로 1-'Hello Sync And Async'-2 순으로 출력이 됩니다.
let data = fs.readFileSync('test.txt', {
    encoding: 'utf8'
});
console.log(data);
console.log(2);


// Async
console.log(2);
// 백그라운드에서 파일을 읽고 난 후 출력을 하기에 2-4-3-'Hello Sync And Async'순으로 출력이 됩니다.
fs.readFile('test.txt', {
    encoding: 'utf-8'
}, function (err, data) {
    console.log(3);
    console.log(data);
});
console.log(4);