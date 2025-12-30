import Conclusion from '@/components/trouble/Conclusion';
import Implementation from '@/components/trouble/Implementation';
import ServiceSummaryTable from '@/components/trouble/ServiceSummaryTable';
import SolutionTable from '@/components/trouble/SolutionTable';
import React from 'react'

export default function Trouble() {
  return (
    <div>
      <section id="trouble">
        <h3>🛠️ 트러블 슈팅</h3>
        <h4>문제 상황 및 원인 분석</h4>
        <strong style={{ color: '#d6336c' }}>크롤링으로 저장된 JobPosting이 Elasticsearch에 자동 반영되지 않음</strong>
        <h4>
          <span style={{ color: '#2ecc71' }}>✓</span> 서비스 구조 요약
        </h4>
        <ServiceSummaryTable />
        <SolutionTable />
        <Implementation />
        <Conclusion />
      </section>
    </div>
  )
}
