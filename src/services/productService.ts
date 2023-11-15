
import { createProductDB, getProductList, updateProduct, deleteProduct } from "../repositories/productRepository";
import crypto from "crypto"
import { ProductDB } from "../models/ProductDB";


export function getAllProducts() {

    return getProductList();
}

export async function createNewProduct(body: any, idSeller: string) {
    // logica 

    try {
        const { name, description, price, imageDesktop, imageMobile, stock, categoryId, warrantyId} = body
        
        const data : ProductDB = {
            productId : crypto.randomUUID(),
            sellerId : idSeller,
            description: description,
            name : name,
            price: price,
            imageDesktop : imageDesktop,
            imageMobile : imageMobile,
            stock : stock,
            categoryId : categoryId,
            warrantyId : warrantyId,
            createdAt : new Date(),
            updatedAt : new Date()
        }
            
        return await createProductDB(data)
    } catch (error) {
        throw error;
    }  

}

export async function editProduct(body: any, idSeller: string, idProduct: string) {
    try {
        const data = body as ProductDB;

        return await updateProduct(idProduct, data, idSeller)
    } catch (error) {
        throw error
    }
}

export async function removeProduct(idSeller: string, idProduct: string) {
    try {
        return await deleteProduct(idProduct, idSeller);
    } catch (error) {
        throw error
    }
    
}
