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
import FAQ from './Pages/FAQ/FAQ';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import CustmerSupport from './Pages/CustmerSupport/CustmerSupport';
import TandC from './Pages/TandC/TandC';





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
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
        <Route path='/CustomerSupport' element={<CustmerSupport/>} />
        <Route path='/TandC' element={<TandC/>} />
      </Routes>


      <Footer/>


    </>
  );
}

export default App;
