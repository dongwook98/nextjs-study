import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

// /products 경로에서만 사용하는 메타데이터
export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요.',
};

/**
 * /products 경로에서만 사용하는 레이아웃
 */
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성옷</Link>
        <Link href='/products/man'>남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
