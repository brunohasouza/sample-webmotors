import React from 'react'

import CategoryCard from './components/CategoryCard'

import { CATEGORIES } from './categories'

import './style.css'

const CategoryList = () => {
  return (
    CATEGORIES.map(category => {
      return( 
        <div className="notFound__container--category" key={category.label} >
          <CategoryCard {...category} />
        </div>
      )
    })
  )
}

const NotFound = () => {
  return (
    <main className="notFound">
      <div className="notFound__container">
        <p className="alert">EITA! Deu algum erro.</p>
        <p className="subtitle-1">Eu juro que não esperava por isso! :(</p>
        <hr />
        <p className="subtitle-2">Não fique triste, separamos algumas recomendações ara você:</p>
        <div className="notFound__container--categories">
          <p>Categorias</p>
          <CategoryList />
        </div>
      </div>
    </main>
  )
}

export default NotFound;
