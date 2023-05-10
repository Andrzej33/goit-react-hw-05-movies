import { fetchTrendy } from "API/API";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import {useState, useEffect } from "react";


 const Home = ()=> {

const [movies,setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);



useEffect(()=>{
    const getTrendyMovies = async () => {
        setIsLoading(true)
        try {
            const {results} = await fetchTrendy(); 
            // console.log(results);
            setMovies(results)  
        } catch (error) {
           console.log(error.message); 
        }
        finally{setIsLoading(false)}
    }
getTrendyMovies()
},[])
    return(
       <>
       <h1>Trending Movies</h1>
       {isLoading && <Loader/>}
        {movies && <MoviesList movies={movies}/>}
       </>

    )
}

export default Home;