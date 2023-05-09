import { fetchTrendy } from "API/API";
import { MoviesList } from "components/MoviesList/MoviesList";
import {useState, useEffect } from "react";


 const Home = ()=> {

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
        {movies && <MoviesList movies={movies}/>}
       </>

    )
}

export default Home;