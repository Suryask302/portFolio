
const router = require('express').Router()
const { serveIndex, formdata } = require('../controller/webController')


router.get('/', serveIndex)
    .post('/formdata', formdata)

module.exports = router