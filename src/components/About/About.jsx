import React from 'react'
import './about.scss'

const About = () => {
    
  return (
    <div>
      
<body>
  <div class="container">
            <div class="circles"></div>
            <div class="details-container">
                <div class="avatar">
                    <img src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?size=626&ext=jpg&ga=GA1.1.457247399.1681881131&semt=ais" class="img-fluid" alt=""/>
                </div>
                <div class="about">
                    <div class="name">
                        <h3>
                            ABOUT US
                            </h3>
                        
                    </div>
                    <div class="about-content">
                        <p className='para'>
                        The traditional methods of recruitment require far too much paperwork and time. Consequently, from the job posting to the employment, e-recruitment could be the solution to streamline the entire process. In fact, time and resources can be relocated for prioritizing the development of talent and strengthening your employees’ morale. Having the right tools and implementing an e-recruitment software could save cost, time and attract specialists, who would drive more growth and productivity into the company.
                        </p>
                        <button>Know More</button>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="skills-container">
                <button>
                E-Recruitment
                </button>
                <button>
                    Cheaper
                </button>
                <button>
                Effective
                </button>
            </div>
        </div> 
  
</body>
    </div>
  )
}

export default About