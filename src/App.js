import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Details from './Pages/Details';
import { BrowserRouter as Router , Switch, Route, Routes, Link} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Footer from './Pages/Footer';
import { useState } from 'react';
import Signup from './Pages/Signup';

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
      <Route path="/" element={<Homepage  loginCheck = {loginCheck}/>} />
      <Route path="/Details" element={<Details />} />
    </Routes>
  </Router>
 
 {/* <Navbar/>
 <Homepage/>
 <Footer/> */}
 </>

  )
}

export default App;
