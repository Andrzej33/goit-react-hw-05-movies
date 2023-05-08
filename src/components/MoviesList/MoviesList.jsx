import { StyledLink } from "components/StyledLink/StyledLink";


export const MoviesList = ({movies}) => {

    return(
        <ul>
        {movies.map(movie=>(<li key={movie.id}
      //    onClick={()=>getId(movie.id)}
         >
        <StyledLink to={`/movies/${movie.id}`}>{movie.title} {movie.title !== movie.original_title && <span>:({movie.original_title})</span>}</StyledLink>
        </li>))} 
      </ul> 
    )
}