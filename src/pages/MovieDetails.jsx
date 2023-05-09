import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { fetchById, } from "API/API";
import { useState, useEffect } from "react";
import { MovieCard } from "components/MovieCard/MovieCard";
import { Link,Outlet, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

 const MovieDetails = () => {
    const { movieId } = useParams();
const[movie,setMovie] = useState({});

const location = useLocation();

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
        <Link to={location?.state?.from ?? '/'} ><button type="button">Go Back</button></Link>
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
        <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
        
        
        </>
    )
  };

export default MovieDetails;