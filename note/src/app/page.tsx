import Image from 'next/image';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

export default function Home() {
  console.log('안녕!! - 서버'); // 기본적으로 서버 컴포넌트이므로 서버에서만 실행
  console.log(os.hostname()); // 서버 컴포넌트는 노드API 사용 가능

  return (
    <>
      <h1>홈페이지다!</h1>
      {/* 클라이언트 컴포넌트 사용하기 위해 분리 */}
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={400}
        height={400}
      />
    </>
  );
}
