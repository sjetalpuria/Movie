import React, { useEffect, useState } from 'react';
import { fetchMovies } from "./apiAxios";
import { Link } from "react-router-dom";

//const apiKey = process.env.REACT_APP_API_KEY;

const Movies = () => {
   const url = `https://image.tmdb.org/t/p/w300/`;
   
   const [movies, setMovies] = useState([]);

   useEffect(() => 
   {
       const fetchMoviesData = async () => 
      { 
         const moviesData = await fetchMovies();
          setMovies(moviesData);
       }; 
       
       fetchMoviesData(); // async function syntax call
      
    }, [])

   return ( 
      <div> 
         <h1>Popular Movies</h1> 
        
         {movies.map((movie) => ( 
         <Link key={movie.id} to={`/details?id=${movie.id}`} >
         
         <div key={movie.id} >
            <img src= {`${url + movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p> 
         </div> 
         
         </Link>
          ))} 
      </div> 
   );
};

export default Movies;
