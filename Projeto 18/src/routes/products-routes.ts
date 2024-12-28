import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

// Middleware local
productsRouter.get("/", productsController.index);

productsRouter.post("/", myMiddleware, productsController.create);

export { productsRouter };
