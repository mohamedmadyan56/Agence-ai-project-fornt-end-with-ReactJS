
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import ServiceCard from './components/ServiceCard'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
function App() {
  const [theme,setTheme]=useState('light')

  return <>
    <div className={`${theme} w-full min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300`}>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
       <TrustedBy/>
     
 <Services/>
<OurWork/>
<Teams/>
<ContactUs/>
<Footer/>
    </div>

  
  
 
  </>
   
    
 
}

export default App
