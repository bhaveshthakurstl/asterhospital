import React from 'react'
import './AsterGlobalNetwork.css'

const AsterGlobalNetwork = () => {
  return (
    <div className='body'>
        <div class="container">
        <div class="content-heading">
            <h1>Aster Global Network</h1>
        </div>

        <div class="main-content">
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
                    
                    {/* <div class="location-pin pin-1" ></div>
                    <div class="location-pin pin-2" ></div>
                    <div class="location-pin pin-3" ></div>
                    <div class="location-pin pin-4" ></div>
                    <div class="location-pin pin-5" ></div>
                    <div class="location-pin pin-6" ></div>
                    <div class="location-pin pin-7" ></div>

                    <div class="connection-lines">
                        <div class="connection-line" style="top: 25%; left: 25%; width: 100px; transform: rotate(45deg);"></div>
                        <div class="connection-line" style="top: 35%; left: 45%; width: 80px; transform: rotate(-30deg);"></div>
                        <div class="connection-line" style="top: 50%; left: 35%; width: 90px; transform: rotate(60deg);"></div>
                    </div> */}
                </div>

                <div class="floating-stats floating-1">Excellence in Healthcare</div>
                <div class="floating-stats floating-2">Serving Millions</div>
                <div class="floating-stats floating-3">Global Presence</div>
            </div>
        </div>

        <div class="update-info">*Last Updated on August 14 2023</div>

        <div class="interactive-tooltip" id="tooltip"></div>
    </div>
    </div>
  )
}

export default AsterGlobalNetwork