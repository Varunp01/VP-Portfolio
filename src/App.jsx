import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Terminal from './Pages/Terminal';
import Footer from './Components/Footer';
import PersonalProjects from './Pages/PersonalProjects';
import Calculator from './PersonalProjectsComponents/Calculator';
import NotFound from './Pages/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/terminal" element={<Terminal></Terminal>} />
          <Route path="/projects" element={<PersonalProjects />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/*" element={<NotFound />} />
          {/* <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
