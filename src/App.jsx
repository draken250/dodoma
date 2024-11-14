import { useState } from 'react'
import './App.css'
import { HashRouter,Routes ,Route } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <>
      
      <HashRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>

        </Routes>
      </HashRouter>

    </>
  )
}

export default App