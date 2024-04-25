const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { appConfig } = require('../config')

const productSchema = Schema(
    {
        name: String,
        size: Number,
        unitaryPrice: Number,
        imgUrl: String,
        description: String
    },
    {
    timestamps: true
    })

    productSchema.methods.setImgUrl = function setImgUrl (filename) {
        const { host, port } = appConfig
        this.imgUrl = `${host}:${port}/public/${filename}`
    }

    module.exports = mongoose.model('products', productSchema)
    