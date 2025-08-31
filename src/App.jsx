
import './App.css'
import RootLayout from './components/layout/RootLayout';
import About from './components/pages/About'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import Journal from './components/pages/Journal';
import ProductDetails from './components/pages/ProductDetails';
import Error from './components/pages/Error';
import Cart from './components/pages/Cart';

function App() {
 

  return (
    <>
     
     <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/journal" element={<Journal/>} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />


           <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error/>} />

          
        </Route>
      </Routes>
    </>
  )
}

export default App

