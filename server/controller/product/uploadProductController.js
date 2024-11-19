const uploadProductPermission = require('../../helpers/permission');
const productModel = require('../../models/productModel');

const uploadProductController = async (req, res) => {
    try {
        const sessionUserId = req.userId;

        if(!uploadProductPermission) {
            throw new Error("Permission denied")
        }

        const uploadProduct = new productModel(req.body);
        const saveProduct = await uploadProduct.save();

        res.status(201).json({
            message: "Product upload successfully",
            error: false,
            success: true,
            data: saveProduct
        })

    } catch (error) {
        res.status(400).json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = uploadProductController;