const express = require('express')
const morgan = require('morgan')
const {syncModels} = require('./database-config')
const {userRouter} = require('./routes/user')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

// for development
app.use(morgan('dev'))
app.use('/', (req, res)=>{
    res.send('<h1>Testing...</h1>')
})
// User related routes
app.use(userRouter)


syncModels()
app.listen(process.env.PORT || 1000,()=>console.log('Server is listing')) ;