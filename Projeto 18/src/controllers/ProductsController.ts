import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

class ProductsController {
  /**
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para deletar um registro
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string({ required_error: "Name is required!" }).trim().min(6, { message: "Name must be more than 6 characters" }),
      price: z.number({ required_error: "Price is required!" }).positive({ message: "Price must be positive!" })
    });

    const { name, price } = bodySchema.parse(request.body);
    
    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };