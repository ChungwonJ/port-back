import React from 'react'
import { SOLUTION_DATA } from '@/data'
import { renderContentWithStyle } from '@/utills/formatText';

export default function SolutionTable() {
  return (
    <div>
      <h4>해결 방안</h4>
      <table className="solutionTable">
        <thead>
          <tr>
            <th>해결 방안</th>
            <th>상세 내용 및 단점</th>
          </tr>
        </thead>
        <tbody>
          {SOLUTION_DATA.map((item, index) => (
            <tr key={index}>
              <td>
                <strong>{item.title}</strong>
              </td>
              <td>
                <ul className="featureList">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{renderContentWithStyle(feature)}</li>
                  ))}
                </ul>
                {item.drawback && (
                  <strong>{item.drawback}</strong>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
