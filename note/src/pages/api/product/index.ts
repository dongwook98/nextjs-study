/**
 * 12버전 API Routes
 * Next.js에서 제공하는 API Routes 풀스택 개발 가능
 */
import { getProducts, Product } from '@/service/products';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === 'GET') {
    const products = await getProducts();
    return res.status(200).json(products);
  }
  res.status(200);
}
