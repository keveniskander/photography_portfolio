import React from "react"
import background from '../src/images/ROM_copy_BW.jpg'
import places1 from '../src/images/2021-10-21-0043.jpg'
import places2 from '../src/images/2021-10-21-0045.jpg'
 
function Places(props) {
  return (
        <section class="main-section">
          <div class="main-div">
            <img class="background" src={background}/>
            
          
        
            <div class="h1-container">
              <h1>ByKevo</h1>
            </div>
            <div class="h2-container">
              <h2>collection</h2>
            </div>


            
            <div class="portfolio-container">
              <div class="p-container">
                <p class="p1">Places</p>
              </div>
              <div class="photography-portfolio">
                <img src={places1} class="img-left" id="photo1"/>
                <img src={places2} class="img-right" id="photo2"/>
                <img src="" class="img-left" id="photo3"/>
                <img src="" class="img-right" id="photo4"/>
                
              </div>
            </div>
          </div>
          
          
        </section>
    
  )
}
 
export default Places;