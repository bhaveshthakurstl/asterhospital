import React from 'react'
import './OurSpecialisations.css'
import womanImage from '../assets/woman-doing-speech-therapy-with-little-boy-her-clinic.jpg';
import cardiologyImage from '../assets/cardiology.jpg'
import cardiacImage from '../assets/cardiac.jpg'

const OurSpecialisations = () => {
  return (
    <div className='body'>

    <div class="container">
        <div class="content-heading">
            <h1>Our Specialisations</h1>
            <p>Aster offers unparalleled clinical care, backed by advanced research and expertise in all medical disciplines.</p>
        </div>

        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="carousel-track" id="carouselTrack">
                    <div class="specialisation-card" >
                        <div class="card-image">
                            <img src={womanImage} alt="Audiology and Speech Therapy" />
                        </div>
                        <div class="card-overlay">
                            <h3 class="card-title">Audiology and Speech Therapy</h3>
                            <p class="card-description">Comprehensive hearing assessments and speech therapy services</p>
                        </div>
                    </div>

                    <div class="specialisation-card" >
                        <div class="card-image">
                            <img src={cardiacImage} alt="Cardiac Surgery" />
                        </div>
                        <div class="card-overlay">
                            <h3 class="card-title">Cardiac Surgery</h3>
                            <p class="card-description">Advanced heart surgery with minimally invasive techniques</p>
                        </div>
                    </div>

                    <div class="specialisation-card" >
                        <div class="card-image">
                            <img src={cardiologyImage} alt="Cardiology" />
                        </div>
                        <div class="card-overlay">
                            <h3 class="card-title">Cardiology</h3>
                            <p class="card-description">Comprehensive heart care and diagnostic services</p>
                        </div>
                    </div>

                    <div class="specialisation-card" >
                        <div class="card-image">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmOGZmIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNmZGJhNzQiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTAwIiByPSI0MCIgZmlsbD0iIzMzNzNkYyIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHJlY3QgeD0iMTYwIiB5PSIxNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNzAgODBMMjMwIDgwTTIxMCA2MEwyMTAgMTIwIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iNCIvPgo8Y2lyY2xlIGN4PSIxODAiIGN5PSI4MCIgcj0iNSIgZmlsbD0iIzEwYjk4MSIvPgo8Y2lyY2xlIGN4PSIyMjAiIGN5PSI4MCIgcj0iNSIgZmlsbD0iIzEwYjk4MSIvPgo8dGV4dCB4PSIyMDAiIHk9IjI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzJjNWFhMCIgZm9udC1mYW1pbHk9IkFyaWFsIj5OZXVyb2xvZ3k8L3RleHQ+Cjwvc3ZnPg==" alt="Neurology"/>
                        </div>
                        <div class="card-overlay">
                            <h3 class="card-title">Neurology</h3>
                            <p class="card-description">Expert care for neurological disorders and conditions</p>
                        </div>
                    </div>

                    <div class="specialisation-card" >
                        <div class="card-image">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmOGZmIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjgwIiByPSIzNSIgZmlsbD0iI2ZkYmE3NCIvPgo8cmVjdCB4PSIxODAiIHk9IjEwNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxNjAiIHk9IjE3NSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMTA1OThjIi8+CjxyZWN0IHg9IjE2MCIgeT0iMTA1IiB3aWR0aD0iMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZGJhNzQiLz4KPHJlY3QgeD0iMjIwIiB5PSIxMDUiIHdpZHRoPSIyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZkYmE3NCIvPgo8cGF0aCBkPSJNMTgwIDIyMEwyMjAgMjIwTTIwMCAyMDBMMjAwIDI0MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMmM1YWEwIiBmb250LWZhbWlseT0iQXJpYWwiPk9ydGhvcGVkaWNzPC90ZXh0Pgo8L3N2Zz4=" alt="Orthopedics"/>
                        </div>
                        <div class="card-overlay">
                            <h3 class="card-title">Orthopedics</h3>
                            <p class="card-description">Bone, joint, and musculoskeletal system treatments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OurSpecialisations