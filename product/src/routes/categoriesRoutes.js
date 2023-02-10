import express from "express";
import CategoryController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/categories", CategoryController.listCategories)
  .get("/categories/:id", CategoryController.listCategoryById)
  .post("/categories", CategoryController.insertCategory)
  .put("/categories/:id", CategoryController.updateCategory)
  .put("/categories/:id", CategoryController.activateCategory)
  .delete("/categories/:id", CategoryController.deleteCategory)

export default router;   