import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const prisma = new PrismaClient()

let router = express.Router();

router.post('/addUser',async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});


router.get("/getUsers",async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

router.post("/getUser",async (req: Request, res: Response) => {
    
  try {
    const { id } = req.body;
      // Get one User    
    const user = await prisma.user.findUnique({
      where: {        
        id: id,
      },
    });

    res.json(user)

  }catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Error getting user' });
  }  
  
})


router.patch("/updateUser",async(req: Request, res: Response)=>{
  
  try{
    const { id , name, email} = req.body;
    const updateUser = await prisma.user.update({
      where:{
        id:id,
      },
      data:{
        name: name,
        email: email,
      },
    })

    res.json("user with id: " + id+ " was updated ");

  }
  catch(error){
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Error updating user' });
  }

})


router.delete("/deleteUser",async(req: Request, res: Response)=>{
  
  try{
    const { id } = req.body;
    const deleteUser = await prisma.user.delete({
      where:{
        id:id,
      },      
    })

    res.json("user with id: " + id + " was deleted");

  }
  catch(error){
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Error deleting user' });
  }

})

module.exports = router;


