import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()


export async function getUsersList() {

    try {
        const usersPrisma = await prisma.product.findMany();

        return usersPrisma;
        
    } catch (error) {
        
    }
    
}


export async function createUserDB (user: User) : Promise<User>  {
    try {
      
        const result = await prisma.user.create({
            data: user
        })

        return result;
    } catch (error) {
        throw error;
    }
}

