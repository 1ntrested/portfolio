import React, { useState } from "react";
import { lazy,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Appbar from './components/Appbar/Appbar.jsx';
import Home from "./components/Home/Home.jsx";
import Mywork from "./components/Mywork/Mywork.jsx";
//import Experience from "./components/Experience.jsx";
const Experience=lazy(()=>import('./components/Experience/Experience.jsx'))
import Aboutme from './components/Aboutme/Aboutme.jsx';
import Footer from "./components/Footer/Footer.jsx";
import { createContext } from "react";

export const ThemeContext=createContext(null);

function App() {
  const [theme,setTheme]=useState("dark");

  const toggleTheme=()=>{
    setTheme((curr)=>curr==="dark"?"light":"dark")
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
    <BrowserRouter>
    <Appbar />
    <Suspense key={theme} fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/aboutme" element={<Aboutme />} /> 
        <Route path="/mywork" element={<Mywork />} /> 
        <Route path="/experience" element={<Experience />} /> 
      </Routes>
      </Suspense>
    </BrowserRouter>
    <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
