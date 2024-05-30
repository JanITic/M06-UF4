import React from "react";
import './styles/MovieCard.css'

function MovieCard({ imageUrl, title, rate, description }) {
    return (<div className="movie-card">
        <img src={imageUrl} alt={title} />
        <h6>{title}</h6>
        <p>{description}</p>
        <p>Valoracion (1-5): {rate}</p>
    </div>)
}

export default MovieCard;