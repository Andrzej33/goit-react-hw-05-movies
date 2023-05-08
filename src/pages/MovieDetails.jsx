import { useParams } from "react-router-dom";
import { fetchById, fetchCreditsById, fetchReviewById } from "API/API";
import { useState, useEffect } from "react";
import { MovieCard } from "components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
const[movie,setMovie] = useState({});
const[actors,setActors] = useState([]);
const[review,setReview] = useState({});

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
},[movieId]);

const getActors = async () => {
  try {
    const res = await fetchCreditsById(movieId) 
    const {cast} = res;
    setActors(cast)
   
  } catch (error) {
    console.log(error.message);
  }
}

const getReview = async() => {
  try {
    const res =  await fetchReviewById(movieId)
    
    setReview(res)
   
  } catch (error) {
    console.log(error.message);
  }
}

    
    return (
        <>
        <MovieCard movie={movie}/>
        <div>
            <p>Additional information</p>
            <ul>
                <li onClick={getActors}><Link to={`/movies/${movie.id}/cast`}>Cast</Link></li>
                <li onClick={getReview}><Link to={`/movies/${movie.id}/review`}>Reviews</Link></li>
            </ul>
        </div>
        {actors && <div>hgfhhffgf</div>}
        {review && <div>hgfhhffgf</div>}
        </>
    )
  };

