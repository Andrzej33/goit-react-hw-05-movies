import { fetchTrendy } from "API/API";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = ()=> {

const [movies,setMovies] = useState([]);




useEffect(()=>{
    const getTrendyMovies = async () => {
        try {
            const {results} = await fetchTrendy(); 
            // console.log(results);
            setMovies(results)  
        } catch (error) {
           console.log(error.message); 
        }
    }
getTrendyMovies()
},[])
    return(
       <>
       <h1>Trending Movies</h1>
        {movies && <ul>
          {movies.map(movie=>(<li key={movie.id}
        //    onClick={()=>getId(movie.id)}
           >
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>))} 
        </ul>}
        {/* <button type="button" onClick={fetchTrendy}>Get started</button> */}
       </>

    )
}