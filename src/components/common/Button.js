import React from 'react'
import './Button.css'

export const Button = ({ children, fill }) => {
  return (
    <div className="btn-wrapper">
      <button className="view-btn">{children}</button>
    </div>
  )
}

export const FillButton = ({ children }) => {
  return (
    <div className="btn-wrapper">
      <button className="fill-out-btn">{children}</button>
    </div>
  )
}
