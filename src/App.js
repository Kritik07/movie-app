import React,{ useEffect, useState } from "react";

import Movie from "./components/movie";

const FEATURED_API = 
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  function App() {
      const [ movies, setMovies ] = useState([]);

      useEffect( () => {
          fetch(FEATURED_API)
              .then ((res) => res.json())
              .then((data) => {
                  console.log(data)
                  setMovies(data.results);
              });
      },[]);

      return (
          <div className="movie-container">
              {movies.length > 0  &&
                  movies.map((movie) => <Movie key={movie.id} {...movie} />)}
          </div>
      );
  }

  export default App;