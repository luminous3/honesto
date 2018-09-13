import React from 'react'
import './Title.css'

export default ({ children }) => {
  return (
    <div className="title-wrapper">
      <h2 className="questions-title">{children}</h2>
    </div>
  )
}
