import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
