import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { fetchById, } from "API/API";
import { useState, useEffect } from "react";
import { MovieCard } from "components/MovieCard/MovieCard";
import { Link,Outlet } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
const[movie,setMovie] = useState({});


useEffect(()=>{
  const getMovieById = async() =>{
    try {
      const res = await fetchById(movieId); 
      // console.log(res);
      setMovie(res)
    } catch (error) {
      console.log(error.message);
    }
  }
  getMovieById()
},[movieId]);




    
    return (
        <>
        <MovieCard movie={movie}/>
        <div>
            <p>Additional information</p>
            <ul>
                <li 
                // onClick={handleActors}
                ><Link to="cast">Cast</Link></li>
                <li
                //  onClick={getReview}
                 ><Link to="review">Reviews</Link></li>
            </ul>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
        
        
        </>
    )
  };

