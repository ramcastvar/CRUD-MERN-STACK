const appMain = require('./app')
const connectDb = require('../db/mongodb')

async function initApp (appConfig, dbConfig) {
    try {
        await connectDb(dbConfig)
        appMain.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    }
    catch (e) {
        console.error(e)
        process.exit(0)
    }
}

module.exports = initApp
