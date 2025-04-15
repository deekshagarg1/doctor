import React from 'react'
import { toggle1 } from '../tog'
import { Toggle } from './Toggle'

export const About = () => {
  return (
    <>
    
    <div className="main-about">

    <section className="about1">
<div className="a11">

    <div className="a1">
  
        <img src="./images/drpic.png" alt=""/>
        <h1>Dr. Sonika Singh</h1>
        </div>
        
        <p>Hello, I'm Dr. Sonika Singh, a dedicated Homoeopathic Physician with 24 years of experience in the field. I completed my BHMS from NHMC, Delhi University, in 2001. Over the years, I've gained extensive expertise in providing holistic and individualized care, helping patients achieve better health through natural remedies and personalized treatments. My practice is centered on understanding the root causes of ailments and offering effective homeopathic solutions for long-term well-being.</p>
</div>
</section>

<div className="faq">
<h1>FAQ's</h1>
</div>


<div className="tog1">

  {toggle1.map((item)=><Toggle item={item}/>)}
</div>

    </div>
    
    </>
  )
}
