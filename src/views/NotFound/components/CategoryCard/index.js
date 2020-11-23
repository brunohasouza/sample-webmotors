import React from 'react'

import './style.css'

const CategoryCard = ({ link, label, image }) => {
  return (
    <a 
      href={link} 
      className="categoryCard"
      target="_blank"
      style={{ backgroundImage: `url("${image}")`}}
    >
      <span>{label}</span>
    </a>
  )
}

export default CategoryCard