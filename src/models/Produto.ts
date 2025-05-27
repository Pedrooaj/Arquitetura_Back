// models/Product.ts
export interface Produto {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string | null;
  created_at: string;
}
