import { Router } from "express";
import produtoRoutes from "./routes/produtoRoutes";

const router =  Router();

router.use("/produtos", produtoRoutes);

export default router;