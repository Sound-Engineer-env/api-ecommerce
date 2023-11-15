import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";


export class ProductDB implements Product {
    productId: string
    name: string
    description: string | null
    price: Decimal
    imageDesktop: string
    imageMobile: string
    stock: number
    categoryId: string
    sellerId: string
    warrantyId: string
    createdAt: Date
    updatedAt: Date
    
    constructor(
        productId: string, 
        name: string, 
        description: string | null, 
        price: Decimal, 
        imageDesktop: string, 
        imageMobile: string, 
        stock: number, 
        categoryId: string, 
        sellerId: string, 
        warrantyId: string, 
        createdAt: Date, 
        updatedAt: Date
    ) {
        this.productId = productId
        this.name = name
        this.description = description
        this.price = price
        this.imageDesktop = imageDesktop
        this.imageMobile = imageMobile
        this.stock = stock
        this.categoryId = categoryId
        this.sellerId = sellerId
        this.warrantyId = warrantyId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    } 
    
}