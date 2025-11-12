import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Terminal from './Pages/Terminal';
import Footer from './Components/Footer';
import PersonalProjects from './Pages/PersonalProjects';
import Calculator from './PersonalProjectsComponents/Calculator';
import NotFound from './Pages/NotFound';
import NotesApp from './PersonalProjectsComponents/NotesApp';
import StopWatch from './PersonalProjectsComponents/StopWatch';
import CoverPage from './CoverPage';

function App() {
  const [count, setCount] = useState(0)
const [showDelayedComponent, setShowDelayedComponent] = useState(false);

  useEffect(() => {
    const componentTimer = setTimeout(() => {
      setShowDelayedComponent(true);
    }, 4000);

    return () => {
      clearTimeout(componentTimer);
    };
  }, []);
  return (
    <>
    
    {showDelayedComponent ? (
          <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/terminal" element={<Terminal></Terminal>} />
          <Route path="/projects" element={<PersonalProjects />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/notesApp" element={<NotesApp />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
        ) : (
    <CoverPage />      
        )}
      
    </>
  )
}

export default App
