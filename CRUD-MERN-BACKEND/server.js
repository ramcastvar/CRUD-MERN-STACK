require('dotenv').config()
const initApp = require('./utilities/utilapp')
const { appConfig, dbConfig } = require('./config')

initApp(appConfig, dbConfig)
