import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';





function App() {
  return (
    <>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/About' element={<About/>} />  
        <Route path='/Contact' element={<Contact/>} />  
        <Route path='/Blog' element={<Blog/>} />
      </Routes>


    </>
  );
}

export default App;
