import React from 'react'
import './GetInvolved.css'

const GetInvolved = () => {
  return (
    <div className='body'>
         <div class="container1">
        <div class="content-heading1">
            <h1>Get Involved</h1>
        </div>
        
        <div class="campaigns-grid1">
            <div class="campaign-card1 breast-cancer1" >
                <div class="date-badge1">
                    <div class="month1">OCT</div>
                    <div class="day1">18</div>
                </div>
                <div class="card-content1">
                    <div class="campaign-icon1">
                        <div class="butterfly1"></div>
                    </div>
                    <div class="campaign-title1">
                        Breast<br/>
                        Cancer<br/>
                        Awareness
                    </div>
                </div>
            </div>
            
            <div class="campaign-card1 diabetes1" >
                <div class="date-badge1">
                    <div class="month1">NOV</div>
                    <div class="day1">14</div>
                </div>
                <div class="card-content1">
                    <div class="campaign-icon1">
                        <div class="glucose-meter1"></div>
                    </div>
                    <div class="campaign-title1">
                        World<br/>
                        Diabetes<br/>
                        Day
                    </div>
                </div>
            </div>
        </div>
        
        <button class="view-all-btn1" >
            View all Campaigns
        </button>
    </div>
    </div>
  )
}

export default GetInvolved