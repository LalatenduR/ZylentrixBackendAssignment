import { Router } from "express";
import {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";
import { 
    validateCreateUser,
    validateUpdateUser
} from "../middleware/validation.js";


const router=Router();

router.route("/create").post(validateCreateUser,createUser);

router.route("/").get(getAllUsers);

router.route("/:id").get(getOneUser);

router.route("/update/:id").put(validateUpdateUser,updateUser);

router.route("/delete/:id").delete(deleteUser);

router.use((req,res)=>{
    res.status(404).json({error:"The requested route does not exist. Please check the URL and try again."});
})

export default router;