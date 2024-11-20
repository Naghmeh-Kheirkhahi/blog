import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Footer from './Components/Footer/Footer';
import BlogPost from './Pages/Blog/BlogPost';
import FAQ from './Pages/FAQ';





function App() {
  return (
    <>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/About' element={<About/>} />  
        <Route path='/Contact' element={<Contact/>} />  
        <Route path='/Blog' element={<Blog/>} />

        <Route path='/post/:postId' element={<BlogPost/>} />

        <Route path='/FAQ' element={<FAQ/>} />
      </Routes>


      <Footer/>


    </>
  );
}

export default App;
