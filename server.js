const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

app.set('view engine', 'ejs')
app.use(express.static('public'))

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 