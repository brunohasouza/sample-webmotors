import React from 'react'

import './style.css'

const FormCheckbox = ({
  label,
  invert,
  labelFor,
  onChange,
  checked
}) => {
  return (
    <div className={`custom-checkbox ${invert ? 'right' : ''}`}>
      <input 
        type="checkbox" 
        id={labelFor} 
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={labelFor}>{label}</label>
    </div>
  )
}

export default FormCheckbox