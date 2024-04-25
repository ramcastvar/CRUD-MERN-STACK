const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productRoutes = require('../routes/product')

const appMain = express()

appMain.use(cors())
appMain.use(bodyParser.urlencoded({ extended: false }))
appMain.use(bodyParser.json())
appMain.use('/public', express.static(`${process.cwd()}/storage/imgs`))
appMain.use('/v1', productRoutes)

module.exports = appMain
