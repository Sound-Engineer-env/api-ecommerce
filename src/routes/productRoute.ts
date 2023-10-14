import express from 'express';
import { getProducts, createProduct } from '../controllers/productController';


const router = express.Router();


router.get("/list", getProducts)

router.post("/create/:id", createProduct)


export default router;

