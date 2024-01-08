/**
 * 로딩 UI
 * /products 레이아웃을 제외한 페이지 컴포넌트가 마운트 되기 전 보이는 로딩 UI
 * loading.tsx는 자동적으로 layout.tsx에 있는 children 자식 컴포넌트 부분을 Suspense로 감싼다.
 * 그래서 레이아웃까지는 보여지고 실제 페이지가 보이는 부분만 로딩으로 감싸기 때문에 레이아웃에서 만든 nav 태그는 그대로 유지된다.
 */
export default function ProductsLoading() {
  return <p>로딩중 입니다... 💩</p>;
}
