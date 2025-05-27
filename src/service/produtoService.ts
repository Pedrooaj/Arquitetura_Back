import { supabase } from "../config/database";
import { Produto } from "../models/Produto";


class ProdutoService {
 createProduto = async (data: Omit<Produto, "id" | "created_at">): Promise<Produto>  => {
  const { data: result, error } = await supabase
    .from("produtos")
    .insert([data])
    .select()
    .single();

  if (error) throw new Error("Erro ao criar produto: " + error.message);
  return result as Produto;
}

/**
 * Retorna todos os produtos
 */
getAllprodutos = async (): Promise<Produto[]> => {
  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error("Erro ao listar produtos: " + error.message);
  return data as Produto[];
}

/**
 * Busca um produto pelo ID
 */
 getProdutoById = async (id: string): Promise<Produto | null> => {
  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // Not found
    throw new Error("Erro ao buscar produto: " + error.message);
  }

  return data as Produto;
}

/**
 * Atualiza um produto por ID
 */
 updateProduto = async (id: string, updates: Partial<Omit<Produto, "id" | "created_at">>): Promise<Produto> => {
  const { data, error } = await supabase
    .from("produtos")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Erro ao atualizar produto: " + error.message);
  return data as Produto;
}

/**
 * Deleta um produto por ID
 */
 deleteProduto = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from("produtos")
    .delete()
    .eq("id", id);

  if (error) throw new Error("Erro ao deletar produto: " + error.message);
}


}

export default new ProdutoService();