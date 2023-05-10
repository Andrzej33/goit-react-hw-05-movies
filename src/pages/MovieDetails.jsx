import { Suspense, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchById, } from "API/API";
import { useState, useEffect } from "react";

import { MovieCard } from "components/MovieCard/MovieCard";
import { Link,Outlet, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

 const MovieDetails = () => {
  const location = useLocation();
  const previousPage = useRef(location?.state?.from ?? '/');
    const { movieId } = useParams();
const[movie,setMovie] = useState({});
const [isLoading, setIsLoading] = useState(false);



useEffect(()=>{
  const getMovieById = async() =>{
    setIsLoading(true)
    try {
      const res = await fetchById(movieId); 
      // console.log(res);
      setMovie(res)
    } catch (error) {
      console.log(error.message);
    }
    finally{setIsLoading(false)}
  }
  getMovieById()
},[movieId]);




    
    return (
        <>
        {isLoading && <Loader/>}
        <Link to={previousPage.current} ><button type="button">Go Back</button></Link>
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