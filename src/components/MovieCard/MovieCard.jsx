import { Link } from "react-router-dom";

export const MovieCard =({movie}) => {
const {original_title,release_date,poster_path,vote_average,overview,genres} = movie;


const release = release_date ? 
`(${release_date.split("-")[0]})`:
''
;

const roundedAverage = vote_average ? 
`Use Score: ${Number((vote_average*10).toFixed(0))}%`
 :
'No Ranking';


const imageUrl = poster_path? `https://image.tmdb.org/t/p/w400/${poster_path}`:
'https://dummyimage.com/450x550/a3dae6/020430&text=Movie+and+poster+should+be+here...'
    return(
       <>
        <div>
        <Link to="/" end><button type="button">Go Back</button></Link>
            
            <div>
<img src={imageUrl} alt={original_title} />
<div>

    <h2>{original_title ?? 'Unknown'}
    {release && <span>{release}</span>}</h2>
    <p>{roundedAverage}</p>
    {overview && <>
        <h3>Overview</h3>
    <p>{overview}</p>
    </>}
    
    {genres.length > 0 && <>
        <h3>Genres</h3> <p>{genres.map(genre => genre.name).join(', ')}</p>
    </>}
</div>
            </div>
        </div>
      
       </>
    )
}