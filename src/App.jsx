
import React,{useEffect} from 'react'
import './App.css'
import Button from "./components/Button"
import Footer from './components/Footer'
import BackgroundDirt from './components/BackgroundDirt'
import BackgroundDirtPure from './components/BackgroundDirtPure'
import ProgressBar from './components/ProgressBar'
import Card from './components/Card'
import Tree from './components/Tree'
import About from './components/About'
import Moon from './components/Moon'
import Aos from 'aos'
import 'aos/dist/aos.css'
import UpBtn from './components/UpBtn'
import Cat from './components/Cat'


function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <>
   
    <ProgressBar/>
    <Moon/>
    <div className="container">
    <div className="title" data-aos="zoom-in-down">Welcome to My World</div>
    <Button />
    </div>
    <Card/>
    
    
    
    
    <Cat/>
    <Tree/>
    <BackgroundDirt/>
    <BackgroundDirtPure/>
   
    <UpBtn/>
   
    

   


   
    </> 
  )
}

export default App
