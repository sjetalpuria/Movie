import axios from "axios";
import {useSearchParams} from "react-router-dom"

const API_KEY = process.env.REACT_APP_API_KEY;
const apiService = axios.create({ baseURL: "https://api.themoviedb.org/3/",});

export const fetchMovies = async () => {
     try { 
          const response = await apiService.get("movie/popular", 
          { 
               params: { api_key: API_KEY,}, 
          }); 
     return response.data.results; 
    } 
     
    catch (error) 
    { 
     console.error("Error fetching movies", error); 
     return []; 
    }
};

export function useUrlId()
{
     const[searchParams] = useSearchParams();
     const id = searchParams.get("id");
     return {id};

};

// export const fetchDetails = async () => {
//      const {id} = useUrlId();
//      try { 
//           const response = await apiService.get(`movie/${id}`, 
//           { 
//                params: { api_key: API_KEY,}, 
//           }); 
//      return response.data; 
//     } 
     
//     catch (error) 
//     { 
//      console.error("Error fetching movie details", error); 
//      return []; 
//     }
// };

// export const fetchDetails = async () => {
//      // const {id} = useUrlId();
//      try { 
//           const response = await apiService.get("movie/popular", 
//           { 
//                params: { api_key: API_KEY,}, 
//           }); 
//      return response.data.results; 
//     } 
     
//     catch (error) 
//     { 
//      console.error("Error fetching details", error); 
//      return []; 
//     }
// };