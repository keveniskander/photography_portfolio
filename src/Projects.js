import React from "react"
import background from '../src/images/ROM.jpg'
 
function Projects(props) {
  return (
        <section class="main-section">
          <div class="main-div">
            <img class="background" src={background}/>
            <div class="col-12 text-center">
                <h1>ByKevo</h1>
            </div>
            <h1>Projects</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
            risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
            nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
            lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.</p>
            </div>
            <div class="h1-container">
              <h1>collection</h1>
            </div>
            <div class="h2-container">
              <h2>OTB</h2>
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
        </section>
    
  )
}
 
export default Projects;