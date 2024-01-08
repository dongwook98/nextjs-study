/**
 * 미들웨어는 문지기같은 느낌
 * 미들웨어가 우리의 웹 애플리케이션 입구에 서있고, 어떠한 요청이 유효한 요청인지 검사하는 역할
 * 예를들어, API마다 로그인했는지 검사 그리고 매번 페이지 방문마다 로그인했는지 검사하는건 비효율적임,
 * 미들웨어에서 공통적으로 로그인했는지 검사해주면 좋음
 */
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음! 체크중!');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉팅함');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

/**
 * 미들웨어는 기본적으로 전체적으로 수행되서 성능에 안좋을수도 있으므로
 * 특정한 경로에서만 미들웨어 수행하게 할 수 있음
 */
export const config = {
  matcher: ['/products/:path+'], // *: zero or more, +: one or more
};
