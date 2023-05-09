import { StyledLink } from "components/StyledLink/StyledLink";
import { useLocation } from "react-router-dom";


export const MoviesList = ({movies}) => {
  const location = useLocation();
    return(
        <ul>
        {movies.map(movie=>(<li key={movie.id}
      //    onClick={()=>getId(movie.id)}
         >
        <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title} {movie.title !== movie.original_title && <span>:({movie.original_title})</span>}</StyledLink>
        </li>))} 
      </ul> 
    )
}