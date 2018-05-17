# Node.js GET vs POST

GET - Query String 을 통해 데이터를 전송

(우리가 웹 사이트에서 정보를 불러올 때 주로 사용)

```js
// 이렇게 라우트를 이용해서 get 방식을 이용할 수 있음
app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/form_reciever", (req, res) => {
  let title = req.query.title;
  let description = req.query.description;
  res.send(title + "," + description);
});
```

POST - body 에 숨겨서 데이터를 전송

(사용자의 정보를 전송하거나 서버에 저장을 할 때 주소 사용)

```js
// POST는 body에 숨겨서 데이터를 전송하기에 body-parser라는 미들웨어가 필요하다.
// body-parser는 우리가 전송을 누르면 post형식으로 전달되는 내용을 파싱하여
// 객체로 만들어 준다.
// 덕분에 let title = req.body.title이라는 객체를 title의 객체 값으로 넣어줄 수 있는 것이다.
let bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.post("/form_reciever", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  res.send(title + "," + description);
});
```

<br/><br/>


## GET과 POST를 언제 어떻게 써야할까?

GET


POST

- GET은 Query String 
