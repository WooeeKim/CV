# One-page Portfolio (React + p5)

점이 흐르는 배경을 가진 단일 페이지 포트폴리오입니다.

## 빠른 실행
1) 필요한 패키지 설치  
```bash
npm install
```
2) 개발 서버  
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 확인.

## 구조
- 단일 페이지: Hero(About) → Selected Projects → Course Archive → Contact
- 컴포넌트: `App` / `Header` / `Hero` / `SelectedProjectsSection` / `CourseArchiveSection` / `ContactSection`
- 데이터 분리: `src/data/profile.ts`, `src/data/projects.ts`, `src/data/courses.ts`

## 콘텐츠 수정 방법
- 이름/소개/연락처: `src/data/profile.ts`
- 대표 프로젝트 카드: `src/data/projects.ts`
  - `isFeatured: true`인 항목만 "Selected Projects"에 노출
  - `slug`는 앵커 스크롤용 ID
  - `link`를 넣으면 카드에 “보기” 링크가 생성
- 수업별 아카이브: `src/data/courses.ts`
  - 각 `projects` 항목에 `slug`를 넣으면 상단 대표 카드로 스크롤
  - `slug`가 없으면 단순 텍스트로만 표시

## 스타일/디자인 포인트
- Tailwind 클래스 기반, 밝은 배경 + 심플 카드
- Hero 섹션에 p5 점 흐르는 배경(`@p5-wrapper/react`)
- 상단 네비 고정, 섹션 앵커 스크롤

## 다음에 할 수 있는 것
- 프로젝트 썸네일 추가(예: `thumbnail` 필드 추가 후 카드에 이미지 삽입)
- Course Archive를 아코디언/모달 형태로 확장
- 상세 페이지 라우팅 추가
