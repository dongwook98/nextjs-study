/**
 * 최신 버전 API Routes
 * GET, POST 요청별로(함수별로) 구조적으로 작성 할 수 있어서 더 깔끔하게 코드를 작성 가능
 */
import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
