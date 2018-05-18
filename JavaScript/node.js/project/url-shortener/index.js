require('dotenv').config()


const express = require('express')
const morgan = require('morgan')
const randomstring = require('randomstring')
const bodyParser = require('body-parser')

const app = express()

const urls = [{
    slug: randomstring.generate(8),
    longUrl: 'https://www.naver.com'
}]



app.use('/static', express.static('public'))
app.use(morgan('dev'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}))


// 미들웨어 = 함수
function helloMiddleware(req, res, next) {
    console.log('hello')
    res.set('X-Message', 'Hello')

    const secret = req.query.secret || req.body.secret
    if (secret !== process.env.SECRET) {
        res.status(403)
        res.send('403 Forbidden')
    } else {
        next() // 다음 미들 웨어로 과정을 넘긴다.
    }

}

app.use(helloMiddleware)



// GET 메소드로 / 경로에 요청이 들어왔을 때 미들웨어를 실행시킨다.
app.get('/', (req, res) => {
    const host = req.get('host')
    res.render('index.ejs', {
        host,
        urls
    })
})

app.get('/new', (req, res) => {
    res.render('new.ejs', {
        secret: process.env.SECRET
    })
})

app.post('/new', (req, res) => {
    const longUrl = req.body.longUrl;
    const slug = randomstring.generate(8)
    urls.push({
        slug,
        longUrl
    });
    res.redirect('/')
})

// Express는 먼저 등록된 핸들러가 먼저 돌어가게 된다.
app.get('/:slug', (req, res, next) => {
    const urlItem = urls.find(item => item.slug === req.params.slug)
    if (urlItem) {
        // 301 로그를 쓰면 영구히 이동한 것이기에 더 이상 그 사실이 바뀜이 없음을 나타내는 것이기에 요청을 더 이상 보내지 않는다.
        res.redirect(301, urlItem.longUrl);
    } else {
        // 301 영구히 이동했다.
        // 302 있긴 있는데 다른데 있다.
        // res.status(404);
        // res.send('404 Not Found');
        next()
        // Express는 아무 미들웨어에서도 처리해주지 않으면서 next로 미뤄서 더 이상의 미들웨어가 없을 경우
        // 자체적으로 404를 반환한다.
    }
})

app.listen(3000, () => {
    console.log('listening...')
})