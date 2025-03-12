import { Router } from "express";
import {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

const router=Router();

router.route("/create").post(createUser);

router.route("/").get(getAllUsers);

router.route("/:id").get(getOneUser);

router.route("/update/:id").put(updateUser);

router.route("/delete/:id").delete(deleteUser);

export default router;