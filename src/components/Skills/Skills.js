import React from 'react'
import csp from "../../assets/images/csp.png"
import figma from "../../assets/images/figma.png"
import reactjs from "../../assets/images/img4.png"
import jv from "../../assets/images/img5.png"
import html5 from "../../assets/images/img6.png"
import css3 from "../../assets/images/img7.png"
import "./Skills.css"

const Skills = () => {
  return (
    <div class="skills-section">
      <div class="skills-header">
        <h1>My skills</h1>
      </div>
      <div className="skills-container">

        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img src={html5} alt="" class="skills-icons" />
            </div>
            <h3>HTML 5</h3>
          </div>         
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={css3} alt="" class="skills-icons" />
            </div>
            <h3>CSS3</h3>
          </div>          
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={jv} alt="" className="skills-icons" />
            </div>
            <h3>Javascript</h3>
          </div>          
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={reactjs} alt="" className="skills-icons" />
            </div>
            <h3>React</h3>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={figma} alt="" className="skills-icons" />
            </div>
            <h3>Figma</h3>
          </div>          
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={csp} alt="" className="skills-icons" />
            </div>
            <h3>Clip Studio</h3>
          </div>          
        </div>

      </div>

    </div>
  )
}

export default Skills
