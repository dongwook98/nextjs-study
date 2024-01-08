import { getProducts, getProduct } from '@/service/products';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

// 동적으로 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: `제품의 이름: ${product?.name}`,
  };
}

/**
 * /products/pants, /products/skirt와 같이 동적으로 라우팅 되는 페이지
 * pants와 skirt와 같은 데이터는 Props안의 slug로 전달, 이 때 slug는 []안의 이름
 */
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug); // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾기, 서버 컴포넌트라 가능!

  if (!product) {
    notFound();
  }

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width='300'
        height='300'
      />
    </>
  );
}

/**
 * 동적 라우팅은 기본적으로 SSR로 동작함
 * 원하는 페이지는 SSG로 만들고 싶다면 generateStaticParams에 params 명시
 */
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
