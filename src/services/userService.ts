import { createUserDB, getUsersList } from "../repositories/userRepository";
import { User } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';



export function getAllUsers() {

    return getUsersList();

}

export async function createNewUser(body: any, idSeller: string, category_id: string) {
    // logica 

    try {
        const { name, email } = body
        
        const data : User = {
            id : uuidv4(),
            email: email,
            name:name

        }
            
        return await createUserDB(data)
    } catch (error) {
        throw error;
    }
   

}
