import { TECH_DECISION_DATA } from '@/data'
import React from 'react'

export default function Tech() {
  return (
    <div>
      <section id="tech">
        <h3>🛠️ 기술적 의사 결정에 따른 주요 기술</h3>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>배경</th>
              <th>고민 & 결정</th>
              <th>해결</th>
            </tr>
          </thead>
          <tbody>
            {TECH_DECISION_DATA.map((item, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 'bold' }}>{item.tech}</td>
                <td>{item.background}</td>
                <td>{item.decision}</td>
                <td>{item.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
