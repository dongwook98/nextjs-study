import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';

// export const revalidate = 3; // ISR

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽기, 서버 컴포넌트라 가능!
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      {/* MeowArticle은 우리 웹사이트에서 중요하지않고 요청마다 변경되야하므로 CSR로 처리하기 위해 분리 */}
      <MeowArticle />
    </>
  );
}
