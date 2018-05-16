const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

// createServer라는 메소드르 사용하여 서버를 만든다.
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


/**
 * 서버를 만들음
 * let server = http.createServer(); 
 * 
 * 서버가 어떤 특정한 포트를 바라보게 하고
 * 사용자가 우리 서버로 접속할 때 어떤 IP를 타고들어오는 사용자를 수용할 것인지
 * listen 메소드에 port와 hostname을 넣어준다.
 * 
 * listen이 완료되었을 때, function() {}에 해당되는 콜백함수가 실행!
 * 
 * server.listen(port, hostname, function () {
 *  console.log(`Server running at http://${hostname}:${port}/`)
 * });
 */