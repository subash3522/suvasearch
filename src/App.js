import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Details from './Pages/Details';
import { BrowserRouter as Router , Switch, Route, Routes, Link} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Footer from './Pages/Footer';
import { useState } from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Products from './Shopping Apis/Products';
import ReducerPage from './ReducerPage';
import Homepage1 from './Pages/Homepage1';
import HomeRouter from './Pages/HomeRouter';

function App() {

  const [loginCheck, setLoginCheck] = useState(false)

  const loginClicker = (login) => {
    setLoginCheck(!loginCheck)
  }
  return (

<>
<Router>
    <Navbar  
    loginClicker= {loginClicker}
   
    />
   
    <Routes>
      <Route path="/" element={<HomeRouter  loginCheck = {loginCheck}/> } />
      <Route path="/Details" element={<Details />} />
      <Route path='/Products' element = {<Products/>}/>
      <Route path='/ReducerPage' element = {<ReducerPage/>}/>
    </Routes>
   
  </Router>
 
 {/* <Navbar/>
 <Homepage/>
 <Footer/> */}
 </>

  )
}

export default App;
