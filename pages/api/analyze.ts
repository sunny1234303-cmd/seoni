import { NextApiRequest, NextApiResponse } from 'next';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface AnalyzeRequest {
  jobDescription: string;
}

interface AnalyzeResponse {
  skills: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyzeResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { jobDescription }: AnalyzeRequest = req.body;

    if (!jobDescription || typeof jobDescription !== 'string') {
      return res.status(400).json({ error: 'Job description is required' });
    }

    const prompt = `다음 채용공고를 분석해서 핵심 역량 TOP 5를 추출해주세요. 기술 스택, 경험, 역량 등을 포함해서 정확히 5개의 핵심 키워드만 반환해주세요.

채용공고:
${jobDescription}

응답 형식:
- 정확히 5개의 핵심 역량만 추출
- 각 역량은 간결하고 구체적으로
- 기술명은 정확한 명칭 사용 (예: React, Node.js, Python 등)
- 번호나 불필요한 설명 제외하고 역량명만

예시 응답:
React
Node.js
JavaScript
REST API
Git`;

    const message = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    const skills = responseText
      .split('\n')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0)
      .slice(0, 5);

    // 로그 저장 (콘솔에 기록)
    const logData = {
      timestamp: new Date().toISOString(),
      requestSample: jobDescription.slice(0, 100) + '...',
      extractedSkills: skills,
      requestLength: jobDescription.length,
    };

    console.log('Job Analysis Request:', JSON.stringify(logData, null, 2));

    res.status(200).json({ skills });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze job description' });
  }
}