import React from 'react'
import './InsuranceCoverage.css'
import hospitalImage from '../assets/hospital-sitting.jpg'

const InsuranceCoverage = () => {
  return (
    <div className='insurance-body'>
      <div class="insurance-container">
        <div class="containing-header">
            <h1>Insurance Coverage</h1>
            
            <div class="provider-selector">
                <div class="dropdown" onclick="toggleDropdown()">
                    <span>Select your Insurance Provider</span>
                </div>
            </div>
        </div>

        <div class="insurance-content-wrapper">
            <div class="insurance-image-section">
                {/* <div class="medical-image"></div> */}
                <img src={hospitalImage} class="medical-image" alt='hospital image' />
            </div>

            <div class="insurance-coverage-section">
                <div class="insurance-coverage-table">
                    <div class="insurance-table-header">
                        <div></div>
                        <div>Network</div>
                        <div>Inpatient</div>
                        <div>Outpatient</div>
                    </div>
                    
                    <div class="insurance-table-row">
                        <div class="plan-name">Comprehensive+</div>
                        <div class="coverage-icon">✓</div>
                        <div class="coverage-icon">✓</div>
                        <div class="coverage-icon">✓</div>
                    </div>
                    
                    <div class="insurance-table-row">
                        <div class="plan-name">Standard</div>
                        <div class="coverage-icon">✓</div>
                        <div class="coverage-icon">✓</div>
                        <div class="coverage-icon">✓</div>
                    </div>
                    
                    <div class="insurance-table-row">
                        <div class="plan-name">Comprehensive</div>
                        <div class="coverage-icon">✓</div>
                        <div class="coverage-icon">✓</div>
                        <div class="coverage-icon">✓</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default InsuranceCoverage