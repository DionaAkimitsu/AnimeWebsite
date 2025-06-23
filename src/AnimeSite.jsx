import React, { useState } from 'react';
import animeData from './animeData';
import AnimeModal from './components/AnimeModal';
import './styles.css';



const AnimeSite = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);

  return (
    <div className="app dark-theme">
      <nav className="navbar">
        <h1>Anonime</h1>
          <p>Home</p>
          <p>List anime</p>
          <p>
            <input type="text" placeholder="Search anime or movie" />
          </p>
      </nav>

      <section className="explore-section">
          <h2>Explore</h2>
          <p>What are you gonna watch today?</p>
          <div className="featured-anime-horizontal">
            <div className="image-left">
              <img src={animeData[0].image} alt={animeData[0].movieName} />
              <div className="left-gradient-overlay">
                <h3>{animeData[0].movieName}</h3>
                <p>{animeData[0].description.split('. ').slice(0, 3).join('. ') + '...'}</p>
              </div>
            </div>
          </div>
        </section>

      <section className="new-release-section">
        <h2>New Release</h2>
        <ul className="anime-list">
            <div className="anime-row">
                {animeData.slice(1).map((item) => (
                  <div 
                  className="anime-card" 
                  key={item.id} 
                  onClick={() => setSelectedAnime(item)}
                  >
                      <div className="image-wrapper">
                        <img src={item.image} alt={item.movieName} />
                        <div className="overlay">
                        <p>Tập {item.episode}</p>
                      </div>
                    </div>
                    <h4>{item.movieName}</h4>
                  </div>
                ))}
            </div>
        </ul>
      </section>
      {/* Props: truyền dữ liệu từ item sang AnimeModal */}
      <AnimeModal anime={selectedAnime} onClose={() => setSelectedAnime(null)} />
    </div>
  );
};

export default AnimeSite;