import { useState } from 'react';
import Head from 'next/head';

interface AnalysisResult {
  skills: string[];
}

export default function Home() {
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      setError('채용공고 내용을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobDescription }),
      });

      if (!response.ok) {
        throw new Error('분석 중 오류가 발생했습니다.');
      }

      const data: AnalysisResult = await response.json();
      setResult(data);
    } catch (err) {
      setError('분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Analysis error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>채용공고 AI 분석기</title>
        <meta name="description" content="AI로 채용공고를 분석하여 핵심 역량을 추출합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              채용공고 AI 분석기
            </h1>
            <p className="text-lg text-gray-600">
              AI가 채용공고를 분석하여 핵심 역량 TOP 5를 추출해드립니다
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
                채용공고 내용을 붙여넣어 주세요
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="채용공고 전체 내용을 이곳에 붙여넣어 주세요..."
                className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={isLoading || !jobDescription.trim()}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  분석 중...
                </div>
              ) : (
                'AI 분석 시작'
              )}
            </button>

            {result && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">분석 결과</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">핵심 역량 TOP 5</h3>
                  <div className="grid gap-3">
                    {result.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                      >
                        <div className="flex items-center">
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                            {index + 1}
                          </span>
                          <span className="text-gray-900 font-medium">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Powered by Claude AI • 무료 서비스
            </p>
          </div>
        </div>
      </div>
    </>
  );
}