const express = require('express')
const morgan = require('morgan')
const randomstring = require('randomstring');
const app = express()

const urls = [{
    slug: randomstring.generate(8),
    longUrl: 'https://www.naver.com'
}]



app.use('/static', express.static('public'))
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.render('index.ejs', {
        urls
    })
})

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