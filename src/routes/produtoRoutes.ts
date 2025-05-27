import { Router } from "express";
import produtoController from "../controllers/produtoController";
import multer from "../config/multer";

const produtoRoutes = Router();


produtoRoutes.get("/", produtoController.getAll);
produtoRoutes.get("/:id", produtoController.getById)
produtoRoutes.post("/", multer.single('image') , produtoController.create);
produtoRoutes.delete("/:id", produtoController.remove);
produtoRoutes.patch("/:id", multer.single('image'), produtoController.update);

export default produtoRoutes; 