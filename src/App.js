import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Details from './Pages/Details';
import { BrowserRouter, Switch, Route, Routes, Link, Router } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Footer from './Pages/Footer';

function App() {
  return (
 <>
 {/* <Router>
 <Navbar/>
 <Routes>
  <Route path="/" element = {<Homepage/>}><Route/>
  <Route path="/Details" element = {<Details/>}><Route/>

 </Routes>
 </Router> */}
 <Navbar/>
 <Homepage/>
 <Footer/>
 </>
  );
}

export default App;
