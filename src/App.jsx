import React from "react";
import "./App.css"
import "./components/App2.css"
import { Home } from "../Home";
import { Nav } from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Appointment } from "./components/appointment";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Support } from "./components/Support";

function App (){
  // const[popup , setpopup]=useState(false)
  return (
    <>
   

  < BrowserRouter>
  <Nav />

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/appointment" element={<Appointment />}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/support" element={<Support/>}/>



</Routes>




  </BrowserRouter>

    
    
    
    
    </>
  )
}
export default App;