const express = require('express')

const app = express()

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3000, () => {
    console.log('listening...')
})