
require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const routes = require('./routes/route')
const connectFlash = require('connect-flash')
const { notFound, errorHandler } = require('./utils/errors')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(session({
    secret: 'some super secret',
    resave: false,
    saveUninitialized: false,
}))

app.use(connectFlash())
app.use((req, res, next) => {
    res.locals.messages = req.flash()
    next()
})

app.use('/', routes)

app.use(notFound)
app.use(errorHandler)


app.listen(port, _ => console.log(`server is Up And Running 🚀 on port ${port}`));