// import { ChevronDown } from 'lucide-react';
import './QuickSearch.css'

export default function QuickSearch() {
  return (
    <div className='quicksearch-body'>
         <div class="quick-container">
        <div className='quick-title'>Quick Search</div>
        
        <div class="quick-search-row">
            <div class="quick-dropdown">
                <span>Burjeet Medical City, Mohamed I</span>
                <svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            <div class="dropdown placeholder">
                <span>Select Department</span>
                <svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            <div class="dropdown placeholder">
                <span>Select Doctor</span>
                <svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            <div class="book-btn">
                Book Appointment
            </div>
        </div>
    </div>
    </div>
  );
}