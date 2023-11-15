import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()


export async function getProductList() : Promise<Product[]> {

    try {
        const productsPrisma = await prisma.product.findMany();

        return productsPrisma;
        
    } catch (error) {
        throw error
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

export async function deleteProduct(idProduct: string, idSeller: string) : Promise<Product> {
    try {
        return await prisma.product.delete({
            where: {
                productId : idProduct,
                sellerId: idSeller
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function updateProduct(idProduct : string, dataProduct: Product, idSeller: string) : Promise<Product> {
    try {
        return await prisma.product.update({
            where : { 
                productId : idProduct,
                sellerId : idSeller
            },
            data : dataProduct
        });
    } catch (error) {
        throw error;
    }
}

