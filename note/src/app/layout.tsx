import { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
/**
 * Next.js에서 제공하는 next/font는 자동으로 최적화해줌
 * 레이아웃 시프트 발생X, 폰트파일 네트워크 요청X
 */
import { Open_Sans, Nanum_Gothic } from '@next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

/**
 * 모든 경로에서 사용하는 메타데이터
 */
export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

/**
 * 모든 경로에서 사용하는 전체 레이아웃, 헤더
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <Link href='/'>
            <h1 className={gothic.className}>Demo Note</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
