import React from 'react'
import './WeWillTreatYouWell.css'
import trustImage from '../assets/trust.jpg'

const WeWillTreatYouWell = () => {
  return (
    <div className='body'>
        <div class="container">
        <div class="content-wrapper">
            <div class="left-content">
                <h1 class="title">We'll treat you well</h1>
                
                <p class="description">
                    That's our simple promise, and one that makes life easy for our patients and their families, even when ailments and treatments may be complex. Today, we are among the list of world-class hospitals in the UAE because all our specialists and support staff work in a coordinated and compassionate manner, delivering the best and latest care for all medical conditions.
                </p>

                <div class="service-buttons">
                    <div class="service-btn" onclick="openModal('preventive')">
                        <div class="btn-title">Preventive Health</div>
                        <div class="btn-subtitle">Check Packages</div>
                    </div>
                    
                    <div class="service-btn" onclick="openModal('immunisation')">
                        <div class="btn-title">Immunisations</div>
                        <div class="btn-subtitle">& Vaccinations</div>
                    </div>
                    
                    <div class="service-btn" onclick="openModal('homecare')">
                        <div class="btn-title">Home Care</div>
                        <div class="btn-subtitle">Services</div>
                    </div>
                    
                    <div class="service-btn" onclick="openModal('maternity')">
                        <div class="btn-title">Aster Maternity</div>
                        <div class="btn-subtitle">Packages</div>
                    </div>
                </div>
            </div>

            <div class="right-content">
                <div class="main-image">
                    <img src={trustImage} alt="Healthcare Team"/>
                </div>
                
                <div class="floating-element element-1">World-Class Care</div>
                <div class="floating-element element-2">24/7 Support</div>
                
                <div class="service-icons">
                    <div class="service-icon tooltip" data-tooltip="Emergency Care">🚨</div>
                    <div class="service-icon tooltip" data-tooltip="Specialized Treatment">⚕️</div>
                    <div class="service-icon tooltip" data-tooltip="Advanced Technology">🔬</div>
                    <div class="service-icon tooltip" data-tooltip="Patient Care">❤️</div>
                </div>
            </div>
        </div>
    </div>

    <div id="serviceModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modalTitle"></h2>
            <p id="modalContent"></p>
        </div>
    </div>
    </div>
  )
}

export default WeWillTreatYouWell