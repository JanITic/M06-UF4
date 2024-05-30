import React from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../config/config"
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import './styles/MovieAdd.css'

function MoviesAdd(props) {
    const [movie, setMovie] = useState({ title: '', description: '', direction: '', image: '', rate: '', year: '', duration: '' })
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(movie);
        const alovelaceDocumentRef = await addDoc(collection(db, 'pelicules'), movie);
        window.location.reload();
    };

    const handleOnFocus = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value,
        }));
    }

    return (<div>
        <h2>Agregar Película</h2>
        <form onSubmit={handleSubmit} className="form-container">
            <label>Títol:</label>
            <input type="text" name="title" value={movie.title} onChange={handleOnFocus} />

            <label>Descripció:</label>
            <textarea name="description" value={movie.description} onChange={handleOnFocus}></textarea>

            <label>Direcció:</label>
            <input type="text" name="direction" value={movie.direction} onChange={handleOnFocus} />

            <label>Imatge (URL):</label>
            <input type="text" name="image" value={movie.image} onChange={handleOnFocus} />

            <label>Nota (1-5):</label>
            <input type="number" name="rate" value={movie.rate} min="1" max="5" onChange={handleOnFocus} />

            <label>Any:</label>
            <input type="number" name="year" value={movie.year} onChange={handleOnFocus} />

            <label>Durada (min):</label>
            <input type="number" name="duration" value={movie.duration} onChange={handleOnFocus} />

            <button type="submit">Afegir pel·lícula</button>

        </form>

        <Link to="/">
            <button>
                Volver
            </button>
        </Link>

    </div>)
}

export default MoviesAdd