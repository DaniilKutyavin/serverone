const ProductService = require('../service/product-service.js');
const ApiError = require('../error/ApiError.js');

class ProductController {
    async createSZR(req, res, next) {
        try {
            const { img, certificate, presentation } = req.files;
            const product = await ProductService.createProductSZR(req.body, img, certificate, presentation);
            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async createUDO(req, res, next) {
        try {
            const { img, certificate, presentation } = req.files;
            const product = await ProductService.createProductUDO(req.body, img, certificate, presentation);
            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async createPOS(req, res, next) {
        try {
            const { img, certificate, presentation } = req.files;
            const product = await ProductService.createProductPOS(req.body, img, certificate, presentation);
            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const product = await ProductService.getProductById(req.params.id);
            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async del(req, res, next) {
        try {
            const product = await ProductService.deleteProduct(req.params.id);
            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAllByType(req, res, next) {
        try {
            const products = await ProductService.fetchProductsByTypeAndStatus(req.params.id);
            return res.json(products);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { img, certificate, presentation } = req.files || {};
            const updatedProduct = await ProductService.updateProduct(id, req.body, img, certificate, presentation);
            return res.json(updatedProduct);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

}

module.exports = new ProductController(); 
