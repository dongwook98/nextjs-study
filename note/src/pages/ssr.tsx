import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

// 12버전은 컴포넌트는 무조건 클라이언트 동작
export default function SSRPage({ products }: Props) {
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
      <MeowArticle />
    </>
  );
}

// 12버전 SSR, 여기서 리턴하는 props를 SSRPage 컴포넌트 props로 전달함
// getServerSideProps는 서버에서 실행
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
