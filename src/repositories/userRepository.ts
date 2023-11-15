import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()


export async function getUsersListDB() {

    try {
        const usersPrisma = await prisma.user.findMany();
        return usersPrisma;
        
    } catch (error) {
        throw error;
    }
    
}

export async function getUserDB(id:string) {

    try {                
        
        const user = await prisma.user.findUnique({
          where: {        
            id: id,
          },
        });
        
        return user
    
      }catch (error) {
        throw error;
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

export async function updateUserDB (idUser: string, dataUser:User) : Promise<User>  {
    try {
      
        const result = await prisma.user.update({
            where:{
              id:idUser,
            },
            data:dataUser,
          })

        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteUserDB (idUser: string){
    try {
      
        const result = await prisma.user.delete({
            where:{
              id:idUser,
            },      
          })

        return result;
    } catch (error) {
        throw error;
    }
}



