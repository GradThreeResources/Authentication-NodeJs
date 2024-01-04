const express = require('express')
const morgan = require('morgan')
const {syncModels} = require('./database-config')
const {userRouter} = require('./routes/user')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

// for development
app.use(morgan('dev'))

// User related routes
app.use(userRouter)


syncModels()
app.listen(3000, 'localhost',()=>console.log('Server is listing')) ;