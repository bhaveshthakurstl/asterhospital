import React from 'react'
import './CommittedToYourSafety.css'
import committedImage from '../assets/comitted.png'

const CommittedToYourSaftey = () => {

  return (
    <div className='body'>
    <div class="container">
        <div class="content-heading">
            <h1>Committed to your Safety</h1>
            <p>At one of the premium hospitals in Dubai, Aster Hospitals we continue to follow the highest level of safety precautions as we treat our patients. We are strictly adhering to all ICMR & WHO mandated protocols, to keep you and your family safe & healthy.</p>
        </div>

        <div class="content-wrapper">
            <div class="safety-features">
                <div class="feature-card screening" onclick="openModal('screening')">
                    <div class="feature-icon">🔍</div>
                    <h3 class="feature-title">
                        <span class="pulse-dot"></span>Screening for All
                    </h3>
                    <p class="feature-description">All our employees & patients must go through a mandatory thermal screening before entering the hospital premises.</p>
                </div>

                <div class="feature-card masks" onclick="openModal('masks')">
                    <div class="feature-icon">😷</div>
                    <h3 class="feature-title">
                        <span class="pulse-dot"></span>Masks for Everyone
                    </h3>
                    <p class="feature-description">Wearing a mask that securely covers the nose & mouth is mandatory for all patients, attendants, doctors & hospital staff.</p>
                </div>

                <div class="feature-card sanitized" onclick="openModal('sanitized')">
                    <div class="feature-icon">🧼</div>
                    <h3 class="feature-title">
                        <span class="pulse-dot"></span>Sanitized Facility
                    </h3>
                    <p class="feature-description">We regularly disinfect medical equipment and the facility to ensure a healthy and virus free environment.</p>
                </div>

                <div class="feature-card worry-free" onclick="openModal('worry-free')">
                    <div class="feature-icon">✅</div>
                    <h3 class="feature-title">
                        <span class="pulse-dot"></span>Worry-free treatment
                    </h3>
                    <p class="feature-description">Everyone is requested to adhere to social distancing norms in waiting and all public areas.</p>
                </div>
            </div>

            <div class="doctor-image">
                <img src={committedImage} alt="Healthcare Professional" />
                <div class="floating-badge badge-1">WHO Certified</div>
                <div class="floating-badge badge-2">ICMR Compliant</div>
            </div>
        </div>
    </div>

    <div id="safetyModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modalTitle"></h2>
            <p id="modalContent"></p>
        </div>
    </div>
    </div>
  )
}

export default CommittedToYourSaftey