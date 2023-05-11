import { Suspense, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchById, } from "API/API";
import { useState, useEffect } from "react";

import { MovieCard } from "components/MovieCard/MovieCard";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { StyledLink } from "components/StyledLink/StyledLink";
import { AdditionalContainer, AdditionalList, AdditionalTitle } from "components/MoviesList/StyledMovieList";
import { GoBackBtn } from "components/GoBackBtn/GoBackBtnStyled";

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
        <GoBackBtn to={previousPage.current} >go back</GoBackBtn>
        <MovieCard movie={movie}/>
        <AdditionalContainer>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <AdditionalList>
                <li ><StyledLink to="cast">Cast</StyledLink> </li>
                <li
                
                 ><StyledLink to="review">Reviews</StyledLink></li>
            </AdditionalList>
            </AdditionalContainer>
        <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
        
        
        </>
    )
  };

export default MovieDetails;