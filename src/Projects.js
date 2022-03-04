import React from "react"
import background from '../src/images/ROM_copy_BW.jpg'
 
function Projects(props) {
  return (
        <section class="main-section">
          <div class="main-div">
            <img class="background" src={background}/>
            
          

            <div class="h1-container">
              <h1>ByKevo</h1>
            </div>
            <div class="h1-container">
              <h1>collection</h1>
            </div>

            <div class="h2-container">
              <h2>OTB</h2>
            </div>

            <div class="col-12 text-center mt-4 mt-lg-5">
              <p>
                <span class="travel hover-target">travel</span> 
                <span class="wildlife hover-target">wildlife</span> 
                <span class="nature hover-target">nature</span>
              </p>
            </div>
            <div class="portfolio-container">
              <div class="p-container">
                <p class="p1">latest</p>
              </div>
              <div class="photography-portfolio">
                <img src="" class="img-left"/>
                <img src="" class="img-right"/>
                <img src="" class="img-left"/>
                <img src="" class="img-right"/>
                <img src="" class="img-left"/>
                <img src="" class="img-right"/>
              </div>
            </div>
          </div>
          
          
        </section>
    
  )
}
 
export default Projects;