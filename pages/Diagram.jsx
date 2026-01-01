import { DIAGRAMS } from '@/data'
import React from 'react'

export default function Diagram() {
  return (
    <div>
      <section id="diagram">
        <h3>🛠️ Diagram</h3>
        {DIAGRAMS.map((diagram, index) => (
          <figure key={index}>
            <img src={diagram.src} alt={diagram.caption} />
            <figcaption>{diagram.caption}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  )
}
