import React from 'react';
import Header from '../components/Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { Outlet } from 'react-router-dom';

function MainHeader() {

  return (
    <>
    <Header/>
    <Outlet/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default MainHeader
