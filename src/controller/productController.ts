import { Request, Response } from "express";
import ProductService from "../service/productService";

// controller pega o parametro e passa para a service
class ProductController{
    async create(req: Request, res: Response){
       //escrever o body da requisição 
       await ProductService.createProduct(req.body)

       return res.status(201).send()
    }

    async list(req: Request, res: Response){
        const resultados = await ProductService.listProducts()
        // .send() vem como parametro o que quer que escreva no retorno
        return res.status(200).send(resultados)
    }

    async listStock(req: Request, res:Response){
        const stock = await ProductService.listStock()

        return res.status(200).send(stock)
    }

    async stockValue(req: Request, res:Response){
        const stocksum = await ProductService.stockValue()

        return res.status(200).json(stocksum)
    }
}

export default new ProductController()
