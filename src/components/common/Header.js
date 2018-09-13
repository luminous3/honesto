import React from 'react'
import './Header.css'

export default ({ children }) => {
  return (
    <div className="main-header">
      <h2 className="main-title">{children}</h2>
    </div>
  )
}
