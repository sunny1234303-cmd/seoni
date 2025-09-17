# 채용공고 AI 분석기

AI를 활용해 채용공고를 분석하여 핵심 역량 TOP 5를 추출하는 웹 애플리케이션입니다.

## 기능

- 채용공고 텍스트 입력 및 분석
- Claude AI를 통한 핵심 역량 추출
- 반응형 웹 디자인 (TailwindCSS)
- Vercel 서버리스 함수 기반 백엔드

## 기술 스택

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Backend**: Vercel Serverless Functions
- **AI**: Anthropic Claude API
- **Deployment**: Vercel

## 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 환경 변수 설정:
```bash
cp .env.example .env.local
```

`.env.local` 파일에 Claude API 키를 설정:
```
ANTHROPIC_API_KEY=your_claude_api_key_here
```

3. 개발 서버 실행:
```bash
npm run dev
```

## Vercel 배포

1. Vercel CLI 설치:
```bash
npm i -g vercel
```

2. 프로젝트 배포:
```bash
vercel
```

3. 환경 변수 설정:
```bash
vercel env add ANTHROPIC_API_KEY
```

## API 엔드포인트

### POST /api/analyze

채용공고를 분석하여 핵심 역량을 추출합니다.

**Request Body:**
```json
{
  "jobDescription": "채용공고 텍스트..."
}
```

**Response:**
```json
{
  "skills": ["React", "Node.js", "JavaScript", "REST API", "Git"]
}
```

## 로그 기능

분석 요청에 대한 로그가 서버 콘솔에 기록됩니다:
- 요청 시간
- 요청 텍스트 샘플 (익명화)
- 추출된 키워드
- 요청 텍스트 길이

## 라이센스

MIT