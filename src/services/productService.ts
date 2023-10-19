
import { createProductDB, getProductList } from "../repositories/productRepository";
import { Product } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';



export function getAllProducts() {

    return getProductList();

}

export async function createNewProduct(body: any, idSeller: string, category_id: string) {
    // logica 

    try {
        const { name, description, price, imageDesktop, imageMobile, stock } = body
        
        const data : Product = {
            productId : uuidv4(),
            sellerId : idSeller,
            description: description,
            name : name,
            price: price,
            imageDesktop : imageDesktop,
            imageMobile : imageMobile,
            stock : stock,
            categoryId : category_id,
            warrantyId : "1",
            createdAt : new Date(),
            updatedAt : new Date()
        }
            
        return await createProductDB(data)
    } catch (error) {
        throw error;
    }
   

}
