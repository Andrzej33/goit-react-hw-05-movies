import { Link } from "react-router-dom";

export const MoviesList = ({movies}) => {

    return(
        <ul>
        {movies.map(movie=>(<li key={movie.id}
      //    onClick={()=>getId(movie.id)}
         >
        <Link to={`/movies/${movie.id}`}>{movie.title} {movie.title !== movie.original_title && <span>:({movie.original_title})</span>}</Link>
        </li>))} 
      </ul> 
    )
}