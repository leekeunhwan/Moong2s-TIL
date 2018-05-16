let express = require('express');
let app = express();
app.locals.pretty = true;

// jade를 쓰기위한 환경 설정
app.set('view engine', 'jade');

// ./views말고 jade 템플릿을 담을 디렉토리를 만들고 명시해줘도 된다.
// 하지만 views로 하는 것이 관례이므로 views라고 하자
app.set('views', './views');

// public이라는 디렉토리를 정적인 파일이 위치하는 디렉토리로 하겠다라는 의미
// (public으로 꼭 할 필요는 없지만 관습이여서 public으로 함)
// 정적으로 담아둔 파일을 서비스하고(쓰고) 싶다면 
// app.use(express.static('public')); 코드를 추가해주고
// directory를 만들어서 담아서 사용한다.
// 정적인 파일은 변경을 해도 새로고침 한번으로 바로 반영시킬 수 있다는 장점이 있다.
app.use(express.static('public'));

// 템플릿이라고 주소를 치고 들어오는 사람들에게 temp라는 템플릿 파일을 웹페이지로 렌더링해서 전송한다.
// 템플릿 엔진을 이용할 것이므로 res.send()대신 res.render()를 사용한다.
// 렌더의 두번째 인자로 객체를 넣게되면 Jade 마크업에서 변수에 해당되는 부분이 렌더링된다.

app.get('/template', function (req, res) {
    res.render('temp', {
        time: Date(),
        title: "Jade"
    });
})


// 사용자가 웹에 접속할 때, GET이나 POST방식으로 들어올 수 있다.
// 일반적으로 사람들이 URL을 입력하여 접속하는 경우 GET방식으로 접속하는 것이다.
// GET방식으로 접속한 사용자 중에서 홈페이지로 접속한 사용자를 구분하기 위해 (/)를 쓴다.
app.get('/', function (req, res) {
    res.send('Hello home page');
});

// 이처럼 동적인 파일은 코드 수정시 노드 어플리케이션을 껐다가 켜야하는 번거로움이 있다.
// 하지만 같은 요소를 많이 생성해야 하는 경우 emmet기능이 있어서 물론 HTML로 해도 편하지만
// 코드량의 간소화등을 고려한다면 정적인 파일보다 동적인 파일이 유리하다.
app.get('/dynamic', function (req, res) {
    let lis = "";
    for (i = 0; i < 5; i++) {
        lis += `<li>coding</li>`;
    }
    let time = new Date();
    let output = `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Node.js</title>
    </head>

    <body>
        Hello! Dynamic!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>

    </html>`;
    res.send(output);
})

// app.get()들은 사용자가 어떤 경로로 웹에 접근했는지에 따라 어떤 것을 실행할 것인가를 결정해줄 수 있다.
// app.get을 Route라고 하며, 지금 방금 우리가 한 일을 라우팅이라고 한다.
// 라우팅 - 길을 찾다 : 즉 어떤 요청이 들어왔을 때 어떤 길을 찾을 수 있게 연결해주는 것을 의미
// 사용자가 Root로 들어오게 되면 get.('/')이 res.send(...)을 실행시켜서 사용자의 요청에 응답해준다.(라우팅)
// 사용자가 로그인으로 접속하면 get.('/login')이 res.send(...)을 실행시켜서 사용자의 요총에 응답해준다.(라우팅)


app.get('/route', function (req, res) {
    res.send('Hello Router, <img src="/minji.jpg">')
});


app.get('/login', function (req, res) {
    res.send('<h1>Login Please!</h1>');
})


app.get('/topic', (req, res) => {
    let topics = [
        'Javascript is....',
        'Nodejs is...',
        'Express is....'
    ];
    let output = `
    <a href="/topic?id=${req.query.id}">JavaScript</a><br/>
    <a href="/topic?id=${req.query.id}">Nodejs</a><br/>
    <a href="/topic?id=${req.query.id}">Express</a><br/><br/><br/>
    ${topics[req.query.id]}
    `;
    res.send(output);
})



app.listen(3000, function () {
    console.log('Connected 3000 port!');
})