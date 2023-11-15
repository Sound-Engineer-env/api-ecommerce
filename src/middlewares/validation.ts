import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";



export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      const errors = result.context.errors
      if (errors.length) { 
        return res.status(400).json({ errors: errors });
      };
    }

    return next()
 
  };
};