# 🚀 즉시 배포 가이드

## ✅ 준비 완료 상태
- ✅ 프로젝트 코드 완성
- ✅ Git 저장소 초기화
- ✅ npm 의존성 설치 완료
- ✅ Vercel CLI 설치 완료

## 🎯 바로 배포하기

### 1. GitHub에 코드 업로드

```bash
# GitHub에서 새 저장소 생성 후
git remote add origin https://github.com/YOUR_USERNAME/job-analyzer.git
git branch -M main
git push -u origin main
```

### 2. Vercel 배포

#### 방법 1: Vercel 웹사이트 사용 (추천)

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "New Project" 클릭
   - GitHub 저장소 선택
   - "Deploy" 클릭

3. **환경 변수 설정**
   - 배포 후 프로젝트 설정으로 이동
   - "Environment Variables" 탭
   - 다음 변수 추가:
     ```
     Name: ANTHROPIC_API_KEY
     Value: your_claude_api_key_here
     ```

#### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 환경 변수 설정
vercel env add ANTHROPIC_API_KEY
# 프롬프트에서 API 키 입력

# 재배포 (환경 변수 적용)
vercel --prod
```

### 3. Claude API 키 발급

1. **Anthropic Console 접속**
   - https://console.anthropic.com
   - 계정 생성/로그인

2. **API 키 생성**
   - "API Keys" 메뉴
   - "Create Key" 클릭
   - 키 복사 후 Vercel 환경 변수에 설정

### 4. 배포 완료

배포가 완료되면 다음과 같은 URL에서 접근 가능합니다:
```
https://your-project-name.vercel.app
```

## 🔧 로컬 개발 환경 설정

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일에 ANTHROPIC_API_KEY 추가

# 개발 서버 실행
npm run dev
```

## 📋 체크리스트

- [ ] GitHub 저장소 생성 및 코드 업로드
- [ ] Vercel 계정 생성
- [ ] Vercel에서 프로젝트 배포
- [ ] Claude API 키 발급
- [ ] Vercel 환경 변수 설정
- [ ] 배포 확인 및 테스트

## 🆓 무료 사용량

- **Vercel**: 개인 사용 무료 (월 100GB 대역폭)
- **Claude API**: 신규 가입 시 크레딧 제공
- **GitHub**: 퍼블릭 저장소 무료

## 🛠 문제 해결

### 배포 실패 시
1. 빌드 로그 확인
2. 환경 변수 설정 확인
3. package.json 의존성 확인

### API 오류 시
1. Claude API 키 유효성 확인
2. API 사용량 한도 확인
3. 네트워크 연결 확인