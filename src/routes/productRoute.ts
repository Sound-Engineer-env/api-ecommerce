import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { ValidationChain, body, param } from 'express-validator';
import { validate } from '../middlewares/validation';


const router = express.Router();

const validation : ValidationChain[] = [
    body("name").isString().withMessage("name must be string"),
    param(":id").isString().escape().withMessage("id must be string"),
    body("stock").isInt({min:0}).withMessage("stock must be an Int")
]


router.get("/list", getProducts)

router.post("/create/:id", validate(validation), createProduct)

router.put("/edit/:id", updateProduct)

router.delete("/remove/:id", deleteProduct)


export default router;

