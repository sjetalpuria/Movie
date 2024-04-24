import React, { useState,useEffect } from 'react';
import axios from "axios";
import {useUrlId} from './apiAxios';
const API_KEY = process.env.REACT_APP_API_KEY;
const apiService = axios.create({ baseURL: "https://api.themoviedb.org/3/",});

const MovieDetails=() => {
    const url = `https://image.tmdb.org/t/p/w300/`;
    const [details, setDetails] = useState({});
    const {id} = useUrlId();
    
    //correct code
    useEffect(() => {
        async function fetchDetails(){
            try{
                const response = await apiService.get(`movie/${id}`, 
                { 
                     params: { api_key: API_KEY,}, 
                }); 
                setDetails(response.data);
                console.log(response.data["production_countries"][0]["name"])
                
            }
            catch(error)
            {
                console.log(error);
            }
        }
        fetchDetails();
    },[id]);

    //const [details, setDetails] = useState({});
    // useEffect(() => 
    // {
    //     const fetchMoviesDetails= async () => 
    //    { 
    //       const movieDetails = await fetchDetails();
    //        setDetails(movieDetails);
    //     }; 
        
    //     fetchMoviesDetails(); // async function syntax call
       
    //  }, [details.id])
 
    // console.log(details.id);
    

    return (
        <div>
            <h2>Movie Details</h2>
            <img src= {`${url + details.poster_path}`} alt="" />
            <h2> {details.original_title}</h2>
            <p>{details.overview}</p>
            <p>{details.title}</p>
            <span>{details.vote_average}</span>
            <span>{details.status}</span>
            <a href={details.homepage}>{details.homepage}</a>
          
         </div>
    )

    
}
export default MovieDetails;