import { CONCLUSION_DATA } from '@/data'
import { renderContentWithStyle } from '@/utills/formatText'
import React from 'react'

export default function Conclusion() {
  return (
    <div>
      <section id="conclusion">
        <h4 className="conclusionTitle">결론</h4>
        <ul className="implementationList">
          {CONCLUSION_DATA.map((item) => (
            <li key={item.id}>
              {renderContentWithStyle(item.content)}
              {item.subItems && item.subItems.length > 0 && (
                <ul className="subList">
                  {item.subItems.map((subItem, index) => (
                    <li key={index}>
                      {renderContentWithStyle(subItem)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
