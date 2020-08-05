const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.set('trust  proxy', (ip) => {
    console.log('trust proxy', ip)
    return true
})

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection
connection
    .once('open', () => {
        console.log("MongoDB database connection established successfully")
    })
    .on('error', err => {
        console.error("************************************")
        console.error("* MongoDB database connection fail *")
        console.error("************************************")
        console.error(`${err.message ? err.message : err}`)
    })

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})