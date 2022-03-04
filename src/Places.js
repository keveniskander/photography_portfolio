import React from "react"
import background from '../src/images/ROM_copy_BW.jpg'
 
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
 
export default Places;