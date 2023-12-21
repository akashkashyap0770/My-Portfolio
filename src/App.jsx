// import { useState } from 'react'
import './App.css'

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Error from './components/Error'
import MainHeader from './components/MainHeader'

function App() {
  // const [count, setCount] = useState(0);

  return(
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainHeader/>}> 
      <Route index element={<Home/>}/>  
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/> 
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App
