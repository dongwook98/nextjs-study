import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('안녕!! - 서버'); // 서버에서만 실행됨
  console.log(os.hostname()); // 서버 컴포넌트는 노드API 사용 가능

  return (
    <>
      <h1>홈페이지다!</h1>
      <Counter />
    </>
  );
}
