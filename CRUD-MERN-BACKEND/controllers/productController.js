const product = require('../models/product')

async function addProduct (req, res) {
    try {
        const {
            name,
            size,
            unitaryPrice,
            description
        } = req.body

        const productInstance = product ({
            name,
            size,
            unitaryPrice,
            description
        })

        if (req.file) {
            const { filename } = req.file
            productInstance.setImgUrl(filename)
        }
        
        const productStored = await productInstance.save()
        res.status(201).send({ productStored })
    }
    catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getProducts (req, res) {
    const products = await product.find().lean().exec()
    res.status(200).send({ products })
}

module.exports = {
    addProduct,
    getProducts
}
