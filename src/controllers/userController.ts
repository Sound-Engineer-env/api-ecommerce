import { Request, Response, NextFunction} from 'express';

import { createNewUser, getAllUsers } from '../services/userService';


export function getUsers(req: Request, res: Response) {

    res.json(getAllUsers())
};

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body;

        const idSeller = req.params["id"]

        const categoryId = req.query["category_id"]

        if(categoryId == undefined) { 
            res.json("need to pass category_id query param")
            res.status(400)
        }

        const result = await createNewUser(body, idSeller, (categoryId as string))
        res.json(result);

    } catch (error) {
        next(error);
    }
        


}
