import { Request, Response, ErrorRequestHandler} from 'express';


export function errorHandler(err:ErrorRequestHandler, req: Request, res: Response) {
    console.error(err);
    res.status(500).send('Something went wrong!');
}