import express from 'express';
import { getUser, getUsers, createUser,deleteUser,updateUser } from '../controllers/userController';

const router = express.Router();

router.get("/user/:id", getUser)

router.get("/list-users", getUsers)

router.post("/create-user", createUser)

router.delete("/delete-user/:id", deleteUser)

router.put("/update-user/:id", updateUser)

export default router;
