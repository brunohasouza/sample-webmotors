import React from 'react'

import './style.css'

const Button = ({ 
  onClick, 
  text,
  className,
  type
}) => {
  return (
    <button 
      className={`btn ${className || ''}`}
      onClick={onClick}
      type={type || 'button'}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button