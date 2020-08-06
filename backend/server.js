import * as Utils from './Utils'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection
    .once('open', () => {
        // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
        Utils.ColorLog(Utils.INFO, "MongoDB database connection established successfully")
    })
    .on('error', err => {
        Utils.ColorLog(Utils.ERROR, "MongoDB database connection fail")
        console.error(`${err.message ? err.message : err}`)
    })

app.listen(port, () => {
    Utils.ColorLog(Utils.WARNING, `server is running on port: ${port}`)
})