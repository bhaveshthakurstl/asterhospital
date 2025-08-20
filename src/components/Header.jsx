import { useState } from 'react'
import './Header.css'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleLanguage = () => {}
  const bookAppointment = () => {}

  return (
    <header className="header">
        <div className="top-bar">
            <div className="top-bar-content">
                <div className="emergency-info">
                    <span className="emergency-badge">24/7 Emergency</span>
                    <span>International Patients Welcome</span>
                </div>
                <div className="phone-number">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    (+971) 44 400 500
                </div>
            </div>
        </div>

        <div className="main-header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="logo">
                        <div className="logo-icon">A+</div>
                        <div className="logo-text">
                            <div className="logo-main">Aster</div>
                            <div className="logo-subtitle">HOSPITAL We'll Treat You Well</div>
                        </div>
                    </div>
                </div>

                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Patient Portal</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Appointments</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Specialties
                            <span className="dropdown-arrow">▼</span>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Cardiology</a>
                            <a href="#" className="dropdown-item">Neurology</a>
                            <a href="#" className="dropdown-item">Oncology</a>
                            <a href="#" className="dropdown-item">Pediatrics</a>
                            <a href="#" className="dropdown-item">Surgery</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Facilities
                            <span className="dropdown-arrow">▼</span>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Emergency Room</a>
                            <a href="#" className="dropdown-item">ICU</a>
                            <a href="#" className="dropdown-item">Laboratory</a>
                            <a href="#" className="dropdown-item">Radiology</a>
                            <a href="#" className="dropdown-item">Pharmacy</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">International Patients</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">AI Tadrib (The Training)</a>
                    </li>
                </nav>

                <div className="header-actions">
                    <button className="language-toggle" onClick={toggleLanguage}>عربي</button>

                    <button className="accessibility-btn" title="Accessibility Options">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm1-13h2a1 1 0 000-2h-2a1 1 0 000 2zm-1 6V9a1 1 0 00-2 0v4a1 1 0 002 0zm0 4h-2a1 1 0 000 2h2a1 1 0 000-2z"/>
                        </svg>
                    </button>

                    <button className="appointment-btn" onClick={bookAppointment}>
                        Book Appointment
                    </button>

                    <button className="menu-toggle" onClick={toggleMenu}>☰</button>
                </div>
            </div>
        </div>
    </header>
  )
}


