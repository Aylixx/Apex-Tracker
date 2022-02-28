const express = require('express')
const router = express.Router()

router.get('/', (req, resp) => {
    resp.render('index')
})

router.get('/references', (req, resp) => {
    resp.render('references')
})

module.exports = router