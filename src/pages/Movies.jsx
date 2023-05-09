import { fetchByQuery } from "API/API";
import {useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { toast } from 'react-toastify'
// import { Link } from "react-router-dom";



 const Movies = () => {

    const [searchName, setSearchName] = useState('');
    const [movies,setMovies] = useState([]);
   

    useEffect(()=>{
        
    if (!searchName) return;
    
        const getTrendyMovies = async () => {
            try {
                const {results} = await fetchByQuery(searchName); 
                if(!results.length){
                    setMovies([])
                    return toast(`We find nothing about ${searchName}`)
                }
                setMovies(results)  
            } catch (error) {
                toast.error(error.message);
            }
        }
    getTrendyMovies();
    // return ()=>{controller.abort()}
    },[searchName])

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
    setSearchName(searchName)
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