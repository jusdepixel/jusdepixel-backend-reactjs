import React from 'react'
import './background.scss'

export default function Background() {
  return (
    <div className="background">
      {[...new Array(40)].map((_, i) => (
        <span key={`span-${i}`} />
      ))}
    </div>
  )
}
