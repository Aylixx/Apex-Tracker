const express = require('express')
const router = express.Router()

router.get('/', (req, resp) => {
    resp.render('index')
})

router.get('/references', (req, resp) => {
    resp.render('references')
})

router.get('/overview', (req, resp) => {
    resp.render('overview')
})

module.exports = router