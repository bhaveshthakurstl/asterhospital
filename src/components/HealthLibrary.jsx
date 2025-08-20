import React from 'react'
import './HealthLibrary.css'

const HealthLibrary = () => {
  return (
    <div className='body'> 
    <div class="health-container">
    <div class="health-content-heading">
        <h1>Health Library</h1>
        {/* <p>Your comprehensive guide to wellness and healthy living</p> */}
    </div>


    <div class="category-filters">
        <button class="filter-btn active">All</button>
        <button class="filter-btn">Nutrition</button>
        <button class="filter-btn">Fitness</button>
        <button class="filter-btn">Mental Health</button>
        <button class="filter-btn">Pregnancy</button>
        <button class="filter-btn">Wellness</button>
    </div>

    <div class="health-library-grid">
        <div class="health-card">
            <div class="health-card-image nutrition-bg">
                <span class="health-category-tag dietetics">Dietetics</span>
            </div>
            <div class="health-card-content">
                <h3 class="health-card-title">Eat Right to Beat Tuberculosis</h3>
                <p class="health-card-description">Getting the right nutrition can help speed treatment and prevention includes healthy immunity. Discover foods that boost your immune system and support recovery.</p>
                <a href="#" class="health-read-more">Read More</a>
            </div>
        </div>

        <div class="health-card">
            <div class="health-card-image fitness-bg">
                <span class="health-category-tag pregnancy-care">Pregnancy Care</span>
            </div>
            <div class="health-card-content">
                <h3 class="health-card-title">Work It Out - Bump Approved Fitness</h3>
                <p class="health-card-description">There are plenty of options when it comes down to each individual woman's pregnancy and fitness levels.</p>
                <a href="#" class="health-read-more">Read More</a>
            </div>
        </div>

        <div class="health-card">
            <div class="health-card-image wellness-bg">
                <span class="health-category-tag pregnancy-care">Mental Wellness</span>
            </div>
            <div class="health-card-content">
                <h3 class="health-card-title">Can Yoga Cure Acid Reflux?</h3>
                <p class="health-card-description">Acid reflux, also known as Gastroesophageal reflux disease (GERD), This backwash irritates...</p>
                <a href="#" class="health-read-more">Read More</a>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default HealthLibrary