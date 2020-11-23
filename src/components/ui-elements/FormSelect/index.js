import React from 'react'
import Select, { components } from 'react-select'

import spinner from './../../../assets/images/spinner.gif'

import './style.css'

const FormSelect = ({ 
  loading, 
  prefix, 
  options,
  defaultValue,
  placeholder,
  className,
  onChange
}) => {
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator { ...props }>
        <div className="dropdown-icon">
          {
            loading ?
            <img className="spinner-icon" src={spinner} alt="spinner" /> :
            <div className="dropdown-chevron" />
          }
        </div>
      </components.DropdownIndicator>
    )
  }

  const SingleValue = ({ children, ...props }) => {
    return (
      <components.SingleValue {...props}>
        {prefix}: <strong>{children}</strong>
      </components.SingleValue>
    )
  }

  const IndicatorSeparator = ({ innerProps }) => {
    return <span {...innerProps} />;
  }

  return (
    <Select
      className={className || ''}
      defaultValue={defaultValue}
      onChange={onChange}
      components={{ DropdownIndicator, SingleValue, IndicatorSeparator }}
      placeholder={placeholder}
      options={options}
    />
  )

}

export default FormSelect