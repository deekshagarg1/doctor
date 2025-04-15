import React from 'react'
import { Link } from 'react-router-dom'
export const Contact = () => {
  return (
    <div>
      
      
      
      <div className="contact-main">
<div className="cm1"><h1> Reach out and say hello </h1>
<p>Get in touch through any of the options provided below. We're eager to hear from you! </p></div>


<div className="cl1">

<p>Homeo</p><p style={{color:"orangered"}}>Drug</p>

</div>

</div>

<div className="contact-center"></div>
<div className="contact-footer">
<div className="cf1">

  <h2>Customer support</h2><br />
  <p>if you are unable to book an appointment, please contact our support team. A appointment will be made and one of our support team members will assist you via email.</p><br />
 <Link to='/support'> <button>Contact support</button></Link></div>



<div className="cf1">

<h2>Help center</h2>
<br />
<p>Navigate our help center articles for assistance on various playform and partnership topics. From quick Frequently Asked Question to  in depth guide, we have you covered. </p>
<br />
<Link to='/support'><button>visit our help center</button></Link></div>


</div>



    </div>
  )
}
