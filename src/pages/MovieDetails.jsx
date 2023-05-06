import { useParams } from "react-router-dom";
import { fetchById } from "API/API";
import { useState, useEffect } from "react";
import { MovieCard } from "components/MovieCard/MovieCard";

export const MovieDetails = () => {
    const { movieId } = useParams();
const[movie,setMovie] = useState({});

useEffect(()=>{
  const getMovieById = async() =>{
    try {
      const res = await fetchById(movieId); 
      console.log(res);
      setMovie(res)
    } catch (error) {
      console.log(error.message);
    }
  }
  getMovieById()
},[movieId])

    
    return (
        <>
        <MovieCard movie={movie}/>
        
        </>
    )
  };

