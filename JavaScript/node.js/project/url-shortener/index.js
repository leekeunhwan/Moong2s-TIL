const express = require('express')
const morgan = require('morgan')
const app = express()

app.use('/static', express.static('public'))
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3000, () => {
    console.log('listening...')
})