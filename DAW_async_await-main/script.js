// Claus
const keys = {
    api_key: '809e759104b129bfdc3641cb90e12910', // API key de TMDB
    session_id: 'd9e1a8c2a0d68b80859f41db204856a3a503608b', // session ID
    account_id: 'janllamas' // account ID
}

let moviesResult = document.getElementById("moviesResult");
var total_pages = 0;
var current_page = 1;
let query = '';

function setFav(id, favBool){
    moviesResult.innerHTML = "";
    showFavs();
}

async function showFavs(){
    moviesResult.innerHTML = "";

    try {
        const response = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}&language=en-US&sort_by=created_at.asc&page=1`);
        const data = await response.json();
        
        data.results.forEach(movie => printMovie(movie, true, false));
    } catch (error) {
        console.error("Error fetching favorite movies:", error);
    }
}

async function searchMovies(searchQuery, clear = true) {
    if (clear) {
        clearInput();
        removeActive();
        moviesResult.innerHTML = '';
        current_page = 1;
    }
    query = searchQuery;

    document.getElementById('loading').style.display = 'flex'; // Mostrar el gif de "loading"

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}&language=en-US&page=${current_page}&include_adult=false`);
        const data = await response.json();
        total_pages = data.total_pages;

        for (const movie of data.results) {
            let isFavorite = false;
            const favResponse = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}&language=en-US&sort_by=created_at.asc`);
            const favData = await favResponse.json();
            if (favData.results.some(favMovie => favMovie.id === movie.id)) {
                isFavorite = true;
            }
            printMovie(movie, isFavorite, false);
        }
    } catch (error) {
        console.error("Error searching movies:", error);
    } finally {
        document.getElementById('loading').style.display = 'none'; // Ocultar el gif de "loading"
    }
}

/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    //showWatch();
})

// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>
                                </div>`;
}

// Detectar el scroll al final del documento
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++;
        searchMovies(query, false); // La función ahora acepta un segundo parámetro para concatenar los resultados
    }
});
