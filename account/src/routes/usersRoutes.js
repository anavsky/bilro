import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/user", UserController.listUsers)
  .get("/user/:id", UserController.listUserById)
  .post("/user", UserController.insertUser)
  .put("/user/:id", UserController.updateUser)
  .delete("/user/:id", UserController.deleteUser)

export default router;   