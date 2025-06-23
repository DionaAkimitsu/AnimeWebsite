import React from 'react';
import './AnimeModal.css';

const AnimeModal = ({ anime, onClose }) => {
  if (!anime) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-head">
        <img src={anime.image} alt={anime.movieName} />
        <h2>{anime.movieName}</h2>
        <p><strong>Tập:</strong> {anime.episode}</p>
        </div>
        <p>{anime.description}</p>
      </div>
    </div>
  );
};

export default AnimeModal;