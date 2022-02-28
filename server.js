const express = require('express')
const app = express()
const dotenv = require('dotenv');

//load .env
dotenv.config({ path: './.env' });

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/styles'))

const indexRouter = require('./routes/index')
const profileRouter = require('./routes/profile')

app.use('/', indexRouter)
app.use('/profile', profileRouter)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 