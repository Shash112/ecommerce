const productModel = require('../../models/productModel');

const filterProductController = async (req, res) => {
    try {
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category: {
                "$in": categoryList
            }
        })

        res.json({
            data: product,
            success: true,
            error: false,
            message: "product"
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = filterProductController;