import React from 'react'
import gsd from "../../assets/images/gsd.png"
import "./Fact.css"

const Fact = () => {
  return (
    <div className='fact-section'>
      <div class="fact-header">
                <h1>Random facts</h1>
            </div>
            <div className='fact-container'>
                <div className='fact-content'>                  
                    <div className='fact-box'>
                        <h3></h3>
                        <ul>
                            <li className='fact-item'>Drawing is my zen time</li>
                            <li className='fact-item'>"One cup of coffee a day keeps the doctor away."</li>
                            <li className='fact-item'>I love doing research about religious stuff</li>
                            <li className='fact-item'>My favorite music genres are electronic and rock</li>
                            <li className='fact-item'>Dog-person and bird-person certificated</li>
                            <li className='fact-item'>I sometimes write short sci-fi and action-fantasy stories</li>
                        </ul>
                    </div>
                    <div className='fact-box'>
                        <img src={gsd} className="dog" alt=''/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Fact
