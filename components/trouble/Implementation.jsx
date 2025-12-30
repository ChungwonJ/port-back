import { IMPLEMENTATION_DATA } from '@/data'
import { renderContentWithStyle } from '@/utills/formatText'
import React from 'react'

export default function Implementation() {
  return (
    <div>
      <h4>해결 방법</h4>
      <section id="implementation">
        <div className="checkTitle">
          <span style={{ color: '#2ecc71' }}>✓</span>
          색인 자동화 스케줄러 구현
        </div>

        <ul className="implementationList">
          {IMPLEMENTATION_DATA.map((item, index) => (
            <li key={index}>
              {renderContentWithStyle(item)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
