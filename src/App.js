import React from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'

import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

import AppRouter from './routes'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
