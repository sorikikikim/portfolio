---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: '2023-07-11'
---

## 소개

Next.js는 정적 생성(Static Generation)과 서버 사이드 렌더링(SSR)을 통해 빠르고 효율적인 웹 애플리케이션을 개발할 수 있도록 지원합니다. 두 가지 방식은 각각 다른 사용 사례와 장단점을 가지고 있습니다.

## 정적 생성(Static Generation)

### 특징

- 미리 페이지를 HTML 파일로 생성하여 CDN에 배포합니다.
- 빠른 로딩 속도를 제공하며 CDN 캐싱으로 성능을 최적화합니다.
- 빌드 시점에 데이터를 가져와 페이지를 생성합니다.
- 정적인 페이지에 적합합니다.

### 사용 사례

- 블로그 포스트, 제품 목록과 같이 자주 변경되지 않는 컨텐츠에 적합합니다.
- 사용자에게 항상 동일한 콘텐츠를 제공하는 웹사이트에 적합합니다.

### 사용 방법

```javascript
// pages/index.js

export async function getStaticProps() {
  const data = ... // 데이터 가져오기
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      {/* data를 사용하여 페이지 렌더링 */}
    </div>
  );
}
```

## 서버 사이드 렌더링(Server-side Rendering, SSR)

### 특징
- 각 요청마다 페이지를 서버 측에서 동적으로 생성합니다.
- 데이터베이스와 같은 외부 소스에서 데이터를 가져와 페이지를 렌더링합니다.
- 항상 최신 데이터를 제공할 수 있습니다.

### 사용 사례
- 사용자에 따라 다른 콘텐츠를 제공해야 하는 경우에 적합합니다.
- 사용자가 로그인한 후에만 접근할 수 있는 컨텐츠를 렌더링할 때에 적합합니다.

### 사용 방법
```javascript
// pages/index.js

export async function getServerSideProps() {
  const data = ... // 데이터 가져오기
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      {/* data를 사용하여 페이지 렌더링 */}
    </div>
  );
}
```

## 결론
Next.js에서는 정적 생성과 서버 사이드 렌더링을 사용하여 다양한 웹 애플리케이션을 개발할 수 있습니다. 각 방식의 특성과 장단점을 고려하여 적절한 방식을 선택하여 개발하시면 됩니다.
