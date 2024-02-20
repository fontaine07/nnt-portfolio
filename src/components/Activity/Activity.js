import React from 'react'
import "./Activity.css"
import lightbulb from "../../assets/images/lightbulb.png"

const Activity = () => {
    return (
        <div className='activity-section'>
            <div class="activity-header">
                <h1>What I do</h1>
            </div>
            <div className='activity-container'>
                <div className='activity-content'>
                    <div className='part-box'>
                        <h3>Part Artist</h3>
                        <ul>
                            <li className='activity-item'>Character concept art</li>
                            <li className='activity-item'>Illustration</li>
                            <li className='activity-item'>Storyboard</li>
                        </ul>
                    </div>
                    <div className='part-box'>
                        <img src={lightbulb} className="lightbulb" alt=''/>
                    </div>
                    <div className='part-box'>
                        <h3>Part Coder</h3>
                        <ul>
                            <li className='activity-item'>Frontend development</li>
                            <li className='activity-item'>UI Design</li>
                            <li className='activity-item'>Bugs fixing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Activity
