// import './Hero.css'

// export default function Hero(){
//   const videoSrc = 'https://videos.pexels.com/video-files/5652865/5652865-uhd_2560_1440_25fps.mp4'

//   return (
//     <section className="hero">
//       <div className="hero-media">
//         <video className="hero-video" src={videoSrc} autoPlay muted loop playsInline aria-label="Hospital care video background" />
//         <div className="hero-overlay" />
//       </div>

//       <div className="hero-content">
//         <h1 className="hero-headline">Care Crafted for You, with Dignity & Calm.</h1>
//       </div>

//       <div className="hero-search">
//         <form className="search-form" onSubmit={(e)=>e.preventDefault()} role="search" aria-label="Site search">
//           <div className="input-wrap">
//             <span className="search-icon" aria-hidden="true">🔍</span>
//             <input
//               className="search-input"
//               type="text"
//               placeholder="Search for hospitals, doctors by speciality, condition..."
//               aria-label="Search query"
//             />
//           </div>
//           <button className="search-button" type="submit">Search</button>
//         </form>
//       </div>
//     </section>
//   )
// }


import React from 'react';
import './Hero.css';
import videoImage from '../assets/video1.mp4'

export default function Hero() {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput');
    alert(`Searching for: ${searchInput.value}`);
  };

  return (
    <div className="hero-container">
      <video className="video-background" autoPlay muted loop>
        {/* <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
        <source src={videoImage} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="content">
        <h1 className="main-title">
          Care Crafted for You, with<br/>
          <span className="highlight">Dignity & Calm.</span>
        </h1>

        <div className="search-container">
          <div className="search-wrapper">
            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for hospitals, doctors by specialty, condition....."
                id="searchInput"
              />
              <button type="submit" className="search-button">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}