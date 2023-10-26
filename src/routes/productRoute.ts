import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController';


const router = express.Router();


router.get("/list", getProducts)

router.post("/create/:id", createProduct)

router.put("/edit/:id", updateProduct)

router.delete("/remove/:id", deleteProduct)


export default router;

