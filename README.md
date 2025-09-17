# 🚀 채용공고 AI 분석기

## 📋 간단 배포 가이드

### 1. GitHub 저장소 생성
1. https://github.com → New repository
2. 이름: `job-analyzer`
3. Public 선택 → Create repository

### 2. 코드 업로드
```bash
git remote add origin https://github.com/YOUR_USERNAME/job-analyzer.git
git push -u origin main
```

### 3. Vercel 배포
1. https://vercel.com → GitHub 로그인
2. New Project → GitHub 저장소 선택 → Deploy

### 4. API 키 설정
1. https://console.anthropic.com → API 키 생성
2. Vercel Settings → Environment Variables
3. `ANTHROPIC_API_KEY` 추가 → Redeploy

## ✅ 완료!
배포 URL에서 채용공고 분석 서비스 이용 가능