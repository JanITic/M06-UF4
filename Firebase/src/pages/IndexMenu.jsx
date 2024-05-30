import React from "react";
import { Outlet, Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Card from "../components/Card";
import "../components/styles/IndexMenu.css"

function IndexMenu(props) {
    return (
        <div className="botones">
            <Link to="/movies/add">
                <button>
                    <Card
                        title="Afegeix una peli"
                        imageUrl="movie-web.svg"
                    />
                </button>
            </Link>

            <Link to="/movies/list">
                <button>
                    <Card
                        title="Llista pelis"
                        imageUrl="cine.png"
                    />
                </button>
            </Link>
        </div>
    )
}

export default IndexMenu