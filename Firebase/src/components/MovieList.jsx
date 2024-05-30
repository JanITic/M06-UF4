import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../config/config"
import MovieCard from "./MovieCard";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/MovieList.css"



function MoviesList(props) {
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const query = await getDocs(collection(db, 'pelicules'));
            let movies = []
            query.forEach((movie) => {
                movies.push({ id: movie.id, ...movie.data() })
            });
            setMovieList(movies);
            //console.log(movieList)
        }
        fetchMovies();
    });

    return (
        <div>
            <h2>Llista de pelicules</h2>
            <div className="listado-pelis">
                {movieList
                    .map((movie) => (
                        <MovieCard
                            key={movie.id}
                            imageUrl={movie.image}
                            title={movie.title}
                            rate={movie.rate}
                            description={movie.description}
                        />
                    ))}
            </div>

            <Link to="/">
                <button>
                    Volver
                </button>
            </Link>

        </div>
    );
}

export default MoviesList