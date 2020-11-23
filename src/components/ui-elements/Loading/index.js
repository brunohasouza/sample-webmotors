import React from 'react'

import './style.css'

import spinner from './../../../assets/images/spinner.gif'

const Loading = ({ text }) => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <img src={spinner} alt="loading" />
        <span>{ text || 'Carregando...'}</span>
      </div>
    </div>
  )
}

export default Loading