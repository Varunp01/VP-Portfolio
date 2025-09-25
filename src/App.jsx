import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Terminal from './Pages/Terminal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/terminal" element={<Terminal></Terminal>} />
        {/* <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
