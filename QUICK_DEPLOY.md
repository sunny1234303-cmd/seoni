# ⚡ 5분만에 배포하기

## 🎯 현재 상태: 배포 준비 완료 ✅

모든 파일이 준비되어 있고, npm 의존성과 Vercel CLI도 설치되었습니다.

## 🚀 배포 명령어 (순서대로 실행)

### 1️⃣ Vercel 로그인
```bash
vercel login
```
- 브라우저가 열리면 GitHub/Google 계정으로 로그인

### 2️⃣ 즉시 배포
```bash
vercel --prod
```
- 프로젝트 이름 입력 (기본값 사용해도 됨)
- 모든 질문에 엔터 (기본값 사용)

### 3️⃣ Claude API 키 설정
```bash
vercel env add ANTHROPIC_API_KEY
```
- https://console.anthropic.com 에서 API 키 발급
- 복사한 키를 붙여넣기

### 4️⃣ 환경변수 적용을 위한 재배포
```bash
vercel --prod
```

## 🔗 배포 완료!

배포가 끝나면 다음과 같은 URL이 생성됩니다:
```
https://your-project-name-username.vercel.app
```

## 📱 Claude API 키 발급 방법

1. https://console.anthropic.com 접속
2. 계정 생성/로그인
3. "API Keys" 메뉴
4. "Create Key" 클릭
5. 키 복사

## ⚠️ 중요사항

- API 키는 절대 공개하지 마세요
- 무료 크레딧이 제공되니 바로 사용 가능합니다
- Vercel도 개인 사용은 무료입니다

## 🎉 배포 후 확인

웹사이트에 접속해서:
1. 채용공고 텍스트 입력
2. "AI 분석 시작" 버튼 클릭
3. 핵심 역량 TOP 5 결과 확인

---

**💡 팁**: 모든 명령어를 터미널에서 한 번에 실행하면 5분 안에 완료됩니다!