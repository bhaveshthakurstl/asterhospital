import React from 'react'
import './AsterGlobalNetwork.css'
import globalImage from '../assets/converted_image.jpg'

const AsterGlobalNetwork = () => {
  return (
    <div className='global-body'>
        <div class=".global-container">
        <div class="global-content-heading">
            <h1>Aster Global Network</h1>
        </div>

        {/* <div class="main-content">
            <div class="stats-section">
                <div class="stat-card large">
                    <span class="stat-number" data-target="7">7</span>
                    <div class="stat-label">Countries</div>
                </div>

                <div class="stat-card">
                    <span class="stat-number" data-target="33">33</span>
                    <div class="stat-label">Hospitals</div>
                </div>

                <div class="stat-card">
                    <span class="stat-number" data-target="127">127</span>
                    <div class="stat-label">Clinics</div>
                </div>

                <div class="stat-card">
                    <span class="stat-number" data-target="527">527</span>
                    <div class="stat-label">Pharmacies</div>
                </div>

                <div class="stat-card">
                    <span class="stat-number" data-target="26898">26898</span>
                    <div class="stat-label">Asterians</div>
                </div>
            </div>

            <div class="globe-section">
                <div class="globe-container">
                    <div class="globe-grid"></div>
                </div>

                <div class="floating-stats floating-1">Excellence in Healthcare</div>
                <div class="floating-stats floating-2">Serving Millions</div>
                <div class="floating-stats floating-3">Global Presence</div>
            </div>
        </div> */}
        {/* <img src={globalImage} alt='global' style={{height: '400px', width: '1400px'}}/> */}
        <img 
  src={globalImage} 
  alt="global" 
  className="global-image" 
/>

        {/* <div class="update-info">*Last Updated on August 14 2023</div>

        <div class="interactive-tooltip" id="tooltip"></div> */}
    </div>
    </div>
  )
}

export default AsterGlobalNetwork