/**
 * 클라이언트 컴포넌트
 * 브라우저에서 사용하는 상태(count)를 만들기 위해 클라이언트 컴포넌트로 따로 빼서 만들기
 */
'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('안녕!! - 클라이언트'); // 클라이언트에서 계속 실행, 빌드시 서버에서도 한번 실행
  const [count, setCount] = useState(0); // 클라이언트 컴포넌트라도 Next.js에서 자동으로 정적인 데이터 0은 pre-rendering됨
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
