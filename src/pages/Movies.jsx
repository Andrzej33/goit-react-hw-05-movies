import { fetchByQuery } from "API/API";
import {useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { toast } from 'react-toastify'
import { useSearchParams } from "react-router-dom";
// import { Link } from "react-router-dom";



 const Movies = () => {

   
    const [searchParams, setSearchParams] = useSearchParams()
    const [movies,setMovies] = useState([]);
    const query = searchParams.get("query")
   

    useEffect(()=>{
        
    if (!query) return;
    
        const getTrendyMovies = async () => {
            try {
                const {results} = await fetchByQuery(query); 
                if(!results.length){
                    setMovies([])
                    return toast(`We find nothing about ${query}`)
                }
                setMovies(results)  
            } catch (error) {
                toast.error(error.message);
            }
        }
    getTrendyMovies();
    // return ()=>{controller.abort()}
    },[query])

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
    const searchName = formData.get('name').toLowerCase();
    if (searchName.trim() === '') {
        // toast.info('YOUR SEARCH QUERY IS EMPTY',{position: toast.POSITION.TOP_CENTER})
        // setSearchValue(event.target.value);
        return toast('Please enter your request')
      }
    //   console.log(searchName);
    setSearchParams({query: searchName})
      e.target.reset();
    };
      
    
     

    return(
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <button type="submit">Search</button>
        </form>
        {movies && <MoviesList movies={movies}/>}
        </>
    )
}

export default Movies;