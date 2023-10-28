import { Request, Response, NextFunction} from 'express';

import { createNewProduct, getAllProducts, editProduct, removeProduct } from '../services/productService';


export async function getProducts(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await getAllProducts())
    } catch (error) {
        next(error)
    }
    
};

export async function createProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body;

        const idSeller = req.params["id"]


        const result = await createNewProduct(body, idSeller)

        res.json(result);
    } catch (error) {
        next(error);
    }
}

export async function updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body

        const idSeller = req.params["id"]

        const idProduct = req.query["product_id"] as string

        const result = await editProduct(body, idSeller, idProduct)
        res.json(result)
    } catch (error) {
        next(error)
    }
    
}

export async function deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {

        const idSeller = req.params["id"]

        const idProduct = req.query["product_id"] as string

        const result = await removeProduct(idSeller, idProduct)

        res.json(result)
    } catch (error) {
        next(error)
    }
}

