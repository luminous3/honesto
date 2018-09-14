import React from 'react'
import './Button.css'

export const Button = ({ children, fill, onClick, className }) => {
  return (
    <div className="btn-wrapper">
      <button onClick={onClick} className={`${className} view-btn`}>
        {children}
      </button>
    </div>
  )
}

export const FillButton = ({ children, onClick }) => {
  return (
    <div className="btn-wrapper">
      <button onClick={onClick} className="fill-out-btn">
        {children}
      </button>
    </div>
  )
}
