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


app.get('/', (req, res) => {
    const host = req.get('host')
    res.render('index.ejs', {
        host,
        urls
    })
})

app.get('/new', (req, res) => {
    if (req.query.secret === process.env.SECRET) {
        res.render('new.ejs', {
            secret: process.env.SECRET
        })
    } else {
        // 권한이 없을 때는 403을 설정해주는 것이 관례
        res.status(403);
        res.send('403 Forbidden');
    }

})

app.post('/new', (req, res) => {
    if (req.body.secret === process.env.SECRET) {
        const longUrl = req.body.longUrl;
        const slug = randomstring.generate(8)
        urls.push({
            slug,
            longUrl
        });
        res.redirect('/')
    } else {
        res.status(403);
        res.send('403 Forbidden');
    }
})

// Express는 먼저 등록된 핸들러가 먼저 돌어가게 된다.
app.get('/:slug', (req, res) => {
    const urlItem = urls.find(item => item.slug === req.params.slug)
    if (urlItem) {
        // 301 로그를 쓰면 영구히 이동한 것이기에 더 이상 그 사실이 바뀜이 없음을 나타내는 것이기에 요청을 더 이상 보내지 않는다.
        res.redirect(301, urlItem.longUrl);
    } else {
        // 301 영구히 이동했다.
        // 302 있긴 있는데 다른데 있다.
        res.status(404);
        res.send('404 Not Found');
    }
})

app.listen(3000, () => {
    console.log('listening...')
})