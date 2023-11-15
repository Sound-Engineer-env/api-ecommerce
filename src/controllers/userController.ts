import { Request, Response, NextFunction} from 'express';

import { createNewUser,getOneUser, getAllUsers,deleteOneUser,updateOneUser } from '../services/userService';


export async function getUsers(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await getAllUsers())
    } catch (error) {
        next(error)
    }
};

export async function getUser(req: Request, res: Response, next: NextFunction) {

    try {        
        
        const idUser = req.params["id"]
        const result = await getOneUser(idUser)
        
        res.json(result)
        
    } catch (error) {
        next(error)
    }
};

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        
        const body = req.body;
        

        /* const categoryId = req.query["category_id"]

        if(categoryId == undefined) { 
            res.json("need to pass category_id query param")
            res.status(400)
        } */

        const result = await createNewUser(body)
        res.json(result);

    } catch (error) {
        next(error);
    }        
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        
        const idUser = req.params["id"];  
        const body = req.body;
        const result = await updateOneUser(body, idUser)
        res.json(result);

    } catch (error) {
        next(error);
    }        
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        
        const idUser = req.params["id"];              

        const result = await deleteOneUser(idUser)
        res.json(result);

    } catch (error) {
        next(error);
    }        
}
