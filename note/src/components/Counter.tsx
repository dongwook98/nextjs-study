/**
 * 클라이언트 컴포넌트
 * 브라우저에서 사용하는 상태를 만들기 위해 클라이언트 컴포넌트로 따로 빼서 만들기
 */
'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('안녕!! - 클라이언트'); // 클라이언트에서만 실행됨
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
