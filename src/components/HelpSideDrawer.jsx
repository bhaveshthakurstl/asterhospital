// HelpSideDrawer.jsx
import React, { useState } from 'react';
import './HelpSideDrawer.css';
// import help from '../assets/free-help.png'
import helpImage from '../assets/free-help.png'


const HelpSideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option}`);
    // Add your navigation/functionality logic here
  };

  return (
    <>
      {/* Help Button */}
      {!isOpen && (
        <div className='fixed-btn' onClick={toggleDrawer}>
          <img src={helpImage} alt='help' className='help'/>
        </div>
      )}

      {/* Overlay */}
      {isOpen && <div className="drawer-overlay" onClick={toggleDrawer}></div>}

      {/* Side Drawer */}
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={toggleDrawer}>
          ×
        </button>

        {/* Drawer Content */}
        <div className="drawer-content">
          <div className="drawer-grid">
            {/* Book Appointment on WhatsApp */}
            <div 
              className="drawer-item whatsapp" 
              onClick={() => handleOptionClick('whatsapp-appointment')}
            >
              <div className="item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.516"/>
                </svg>
              </div>
              <span>Book Appointment on<br/>WhatsApp</span>
            </div>

            {/* Book Appointment */}
            <div 
              className="drawer-item appointment" 
              onClick={() => handleOptionClick('book-appointment')}
            >
              <div className="item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <span>Book Appointment</span>
            </div>

            {/* Book Health Packages */}
            <div 
              className="drawer-item health-packages" 
              onClick={() => handleOptionClick('health-packages')}
            >
              <div className="item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <path d="M12 10.5v3M10.5 12h3" stroke="#0066cc" strokeWidth="1"/>
                </svg>
              </div>
              <span>Book Health Packages</span>
            </div>

            {/* International Patient Assistance */}
            <div 
              className="drawer-item international" 
              onClick={() => handleOptionClick('international-assistance')}
            >
              <div className="item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span>International Patient<br/>Assistance</span>
            </div>

            {/* Health Tap */}
            <div 
              className="drawer-item health-tap" 
              onClick={() => handleOptionClick('health-tap')}
            >
              <div className="item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                </svg>
              </div>
              <span>Health Tap</span>
            </div>

            {/* Ask a Doctor */}
            <div 
              className="drawer-item ask-doctor" 
              onClick={() => handleOptionClick('ask-doctor')}
            >
              <div className="item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z"/>
                  <circle cx="12" cy="15" r="2" fill="white"/>
                  <path d="M12 13v4M10 15h4" stroke="#0066cc" strokeWidth="1"/>
                </svg>
              </div>
              <span>Ask a Doctor</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSideDrawer;