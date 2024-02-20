import React, {useState} from 'react'
import "./Hero.css"
import mascot from "../../assets/images/MascotYue.png"
const Hero = () => {
  const [mouseMove, setMouseMove] = useState({
    skew: 0,
    delta: 0,
    topLayerWidth: 50,
    handleLeft: 50 + '%'
  })

  const handleMouseMove = (e) => {
    let delta = (e.clientX - window.innerWidth / 2) * 0.5
    let skew = mouseMove.skew
    if (e.target.className.includes('skewed')) {
        skew = skew + 1000
        console.log(skew)
    }
    
     setMouseMove({
       skew: skew,
       delta: delta,
       topLayerWidth: e.clientX + skew + delta +'px',
       handleLeft: e.clientX + delta + 'px'
     })
  }
  return (

    <>
          <div
            id="profile-wrapper" 
            className="skewed"
            onMouseMove={e => handleMouseMove(e)} >
            <div className="layer bottom">
              <div className="content-wrap">
                <div className="content-body">
                  <h2>Frontend Developer</h2>
                  <p>Building digital products with amazing UI/UX through clean code.</p> 
                </div>
                <img src={mascot} alt="" />
              </div>
            </div>

            <div className="layer top" style={{width: mouseMove.topLayerWidth }}>
              <div className="content-wrap">
                <div className="content-body">
                  <h2 className='outlined-title'>2D Artist</h2>
                  <p>Creating character concept arts and commissioned illustrations.</p>
                </div>
                <img src={mascot} alt="" />
              </div>
            </div>

            <div className="handle" style={{left: mouseMove.handleLeft}}></div>

          </div>
        </>
  )
}

export default Hero;
