import { SUMMARY_DATA } from '@/data'
import React from 'react'

export default function ServiceSummaryTable() {
  const renderContentWithStyle = (content) => {
    if (!content.includes("{code:")) return content;

    return content.split(/\{(code:.*?)\}/).map((part, i) => {
      if (part.startsWith("code:")) {
        const text = part.replace("code:", "");
        return (
          <span key={i} className="codeHighlight">
            {text}
          </span>
        );
      }
      return part;
    });
  };
  
  return (
    <>
      <table className="serviceSummaryTable">
        <thead>
          <tr>
            <th>항목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {SUMMARY_DATA.map((item, index) => (
            <tr key={index}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>{item.icon}</span>
                  <span>
                    {item.label}
                  </span>
                </div>
              </td>
              <td>
                {renderContentWithStyle(item.content)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
