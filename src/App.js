import React from 'react'
import {About, Collection, Create, Discover, Home, Top} from './container'
import { Navbar, Footer} from './component'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Top />
      <Collection />
      <Create />
      <Discover />
      <Footer />
    </div>
  )
}

export default App