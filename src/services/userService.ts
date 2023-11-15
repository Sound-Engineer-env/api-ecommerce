import { createUserDB, getUsersListDB, getUserDB ,updateUserDB, deleteUserDB} from "../repositories/userRepository";
import crypto from "crypto"
import { User } from "@prisma/client"


export function getAllUsers() {

    return getUsersListDB();
}

export async function getOneUser(idUser: string) {

    try {        
       
        return await getUserDB(idUser);

    } catch (error) {
        throw error;
    }
}


export async function createNewUser(body:any) {    

    try {

        const {email,name} = body;             

        const data : User = {
            id : crypto.randomUUID(),
            email: email,
            name:name
        }

        return await createUserDB(data)      
        
    } catch (error) {
        throw error;
    }
   
}

export async function updateOneUser(body:any,idUser:string) {    

    try {
        
        const data = body as User;
        return await updateUserDB(idUser,data)      
        
    } catch (error) {
        throw error;
    }
   
}

export async function deleteOneUser(idUser:string) {    

    try {
     
        return await deleteUserDB(idUser)      
        
    } catch (error) {
        throw error;
    }
   
}
