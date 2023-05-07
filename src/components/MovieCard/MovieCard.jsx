import { Link } from "react-router-dom";

export const MovieCard =({movie}) => {
const {original_title,release_date,poster_path,vote_average,overview,genres} = movie;

const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`
    return(
       <>
        <div>
        <Link to="/" end><button type="button">Go Back</button></Link>
            
            <div>
<img src={imageUrl
} alt="" />
<div>
    <h2>{original_title}<span>{release_date}</span></h2>
    <p>Use Average:{vote_average}%</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h3>Genres</h3>
    {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
</div>
            </div>
        </div>
      
       </>
    )
}