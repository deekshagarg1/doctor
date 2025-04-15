import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
const[popup , setpopup]=useState(false)
const[openmenubar , setopenmenubar]=useState(false)
const[name , setname]=useState("")
const[mob , setmob]=useState("")
const[age , setage]=useState("")
const[display , setdisplay]=useState([])

function togglemenu(){
  setopenmenubar(!openmenubar)
}

function click(){
  const show=[...display , {name , mob,  age}]
  setdisplay(show)
  console.log(display)
  alert("Your appointment is booked")
}


  return (
    <>
        {popup &&             <div className="mainpop">

<div className="pop">

<button  id='btn' onClick={()=>{setpopup(false)}}>X</button>
<h1>Book Your Appointment Now</h1>



<div className="input">Name: <input type="text" placeholder='Enter your name' onChange={(e)=>setname(e.target.value)} /></div>

<div className="input">Mobile: <input type="number" onChange={(e)=>setmob(e.target.value)} /></div>

<div className="input">Age : <input type="number" onChange={(e)=>setage(e.target.value)} /></div>


<div className="input">Gender:
<input type="radio" name='gender' />Male
 <input type="radio" name='gender' />Female
 <input type="radio"  name='gender'/>Other</div>


<div className="input1">  Timing: <input type="radio" name='time' />Morning
<input type="radio" name='time'  />Evening </div>
 <br /><br />

<button className='btn1' onClick={click}>Submit</button>
 


</div>
  </div>
}

<div className="nav">
     <Link to='/' >   <div className="headline"><h1 className="homeo">Homeo</h1>&ensp;<h1 className="drug">Drug</h1> </div></Link>



   
        <div className="content">
            {/* <Link to="/">Home</Link> */}

            <Link to="/">
            <button className='appointment' onClick={()=>{setpopup(true)}}>Book Appointment</button>
            </Link>

            <Link to="/about">About  Me</Link>
            <Link to='/contact'>Contact</Link>

            <button className='btn2' onClick={togglemenu}>{openmenubar?"x":"≡"} </button>  </div>



    </div>


    <div className={`menu-bar ${openmenubar ? "active" : ""}`}>
            <Link to="/">Home</Link>

<Link to="/">
<button className='appointment' onClick={()=>{setpopup(true) , setopenmenubar(false)}}>Book Appointment</button>
</Link>


<Link to="/about">About  Me</Link>
<Link to='/contact'>Contact</Link>
</div>


    </>
  )
}
