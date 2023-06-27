import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import './dashboard.css'

const DashBoard = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["We Provie Best Services For digital Recruitment", "Hire Best Candidate For Your Company", "Best Servie With Minimum Efforts and Cost"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <header>
	<div class="overlay">
<h1>Simply <span className='span'> The Best </span></h1>
<h3 className='reason'>Reasons for Choosing US </h3>
	<span ref={el}></span>
		</div>
</header>

    </div>
  )
}

export default DashBoard