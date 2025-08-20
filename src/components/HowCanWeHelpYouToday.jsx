// import './HowCanWeHelpYouToday.css'

// function IconAppointment(){
//   return (
//     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <path d="M7 2v3M17 2v3M4 9h16M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
//       <path d="M12 13.2c1.88-1.9 4.8.64 2.34 2.94L12 18.4l-2.34-2.26C7.2 13.84 10.12 11.3 12 13.2Z" fill="#fff"/>
//     </svg>
//   )
// }

// function IconDoctor(){
//   return (
//     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="#fff" strokeWidth="1.6"/>
//       <path d="M3.5 20.5a8.5 8.5 0 0 1 17 0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
//       <path d="M16 15v2M15 16h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
//     </svg>
//   )
// }

// function IconInsurance(){
//   return (
//     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
//       <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
//     </svg>
//   )
// }

// function IconLocation(){
//   return (
//     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <path d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" stroke="#fff" strokeWidth="1.6"/>
//       <circle cx="12" cy="10" r="2.5" stroke="#fff" strokeWidth="1.6"/>
//     </svg>
//   )
// }

// const items = [
//   { id: 'appointment', label: 'Book an Appointment', Icon: IconAppointment, color: '--c1' },
//   { id: 'doctor', label: 'Find a Doctor', Icon: IconDoctor, color: '--c2' },
//   { id: 'insurance', label: 'Insurance Cover', Icon: IconInsurance, color: '--c3' },
//   { id: 'locations', label: 'Locations', Icon: IconLocation, color: '--c4' },
// ]

// export default function HowCanWeHelpYouToday(){
//   const handleClick = (id) => {
//     // Placeholder action – plug into routing later
//     console.log('navigate:', id)
//   }

//   return (
//     <section className="help-section" aria-labelledby="help-title">
//       <div className="help-shell">
//         <div className="help-titlebar">
//           <h2 id="help-title">How can we help you today?</h2>
//         </div>

//         <ul className="help-grid" role="list">
//           {items.map(({ id, label, Icon }, index) => (
//             <li key={id} className="help-item">
//               <button className="help-action" onClick={() => handleClick(id)} aria-label={label}>
//                 <span className="help-icon" aria-hidden="true"><Icon /></span>
//                 <span className="help-label">{label}</span>
//                 <span className="help-ripple" aria-hidden="true" />
//               </button>
//               {index < items.length - 1 && <span className="help-divider" aria-hidden="true" />}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }



import React from 'react'
import './HowCanWeHelpYouToday.css'

const HowCanWeHelpYouToday = () => {
  return (
  <div className='body'>
  
  <div class="help-container">
      <div class="content-heading">
          <div class="help-title">How can we help you today?</div>
          {/* <p class="subtitle">Your health, our priority - accessible care at your fingertips</p> */}
      </div>
      
      <div class="services-grid">
          <div class="service-card" data-service="appointment">
              <div class="icon-container">
                  <div class="icon">📅</div>
              </div>
              <h3 class="service-title">Book an Appointment</h3>
              {/* <p class="service-description">Schedule your visit with our expert healthcare professionals at your convenience</p> */}
          </div>
          
          <div class="service-card" data-service="doctor">
              <div class="icon-container">
                  <div class="icon">🩺</div>
              </div>
              <h3 class="service-title">Find a Doctor</h3>
              {/* <p class="service-description">Connect with qualified specialists and physicians in your area or online</p> */}
          </div>
          
          <div class="service-card" data-service="insurance">
              <div class="icon-container">
                  <div class="icon">🛡️</div>
              </div>
              <h3 class="service-title">Insurance Coverage</h3>
              {/* <p class="service-description">Check your insurance benefits and understand your healthcare coverage options</p> */}
          </div>
          
          <div class="service-card" data-service="locations">
              <div class="icon-container">
                  <div class="icon">📍</div>
              </div>
              <h3 class="service-title">Find Locations</h3>
              {/* <p class="service-description">Locate nearby healthcare facilities, clinics, and emergency services</p> */}
          </div>
      </div>
  </div>
  </div>
  )
}

export default HowCanWeHelpYouToday