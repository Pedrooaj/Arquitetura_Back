import { Request, Response } from "express";
import produtoService from "../service/produtoService";

class ProdutoController {
  create = async (req: Request, res: Response) => {
    try {
      const { name, description, price } = req.body;
      const imageUrl = req.file
        ? `${req.file.filename}`
        : null;

      if (!name || price === undefined) {
        res.status(400).json({ error: "Nome e preço são obrigatórios." });
        return;
      }

      const product = await produtoService.createProduto({
        name,
        description,
        price,
        imageUrl,
      });
      res.status(201).json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  getAll = async (_req: Request, res: Response) => {
    try {
      const products = await produtoService.getAllprodutos();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await produtoService.getProdutoById(id);

      if (!product) {
        res.status(404).json({ error: "Produto não encontrado." });
        return;
      }
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
      if (req.file) {
        const imageUrl = `${
          req.file.filename
        }`;
        updates.imageUrl = imageUrl;
      }

      const produtoAtualizado = await produtoService.updateProduto(id, updates);
      res.status(200).json(produtoAtualizado);
    } catch (error: any) {
      console.error("Erro ao atualizar produto:", error);
      res.status(500).json({ message: "Erro ao atualizar produto" });
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await produtoService.deleteProduto(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default new ProdutoController();
