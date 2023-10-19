import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()


export async function getProductList() {

    try {
        const productsPrisma = await prisma.product.findMany();

        return productsPrisma;
        
    } catch (error) {
        
    }
    
}


export async function createProductDB (product: Product) : Promise<Product>  {
    try {
      
        const result = await prisma.product.create({
            data: product
        })

        return result;
    } catch (error) {
        throw error;
    }
}

