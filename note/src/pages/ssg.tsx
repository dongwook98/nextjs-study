import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

// 12버전에서 페이지 컴포넌트는 무조건 클라이언트에서 동작, pre-rendering된 html은 알아서 해줌
export default function SSGPage({ products }: Props) {
  console.log('클라이언트에서 동작');

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

// 12버전 SSG, 여기서 리턴하는 props를 SSGPage 컴포넌트 props로 전달함
// getStaticProps는 서버에서 실행
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    // revalidate: 10, // ISR
  };
}
