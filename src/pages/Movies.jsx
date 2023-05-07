import { fetchByQuery } from "API/API";
import {useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
// import { Link } from "react-router-dom";



export const Movies = () => {

    const [searchName, setSearchName] = useState('');
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const getTrendyMovies = async () => {
            try {
                const {results} = await fetchByQuery(searchName); 
                // console.log(results);
                setMovies(results)  
            } catch (error) {
               console.log(error.message); 
            }
        }
    getTrendyMovies()
    },[searchName])

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
    const searchName = formData.get('name').toLowerCase();
    if (searchName.trim() === '') {
        // toast.info('YOUR SEARCH QUERY IS EMPTY',{position: toast.POSITION.TOP_CENTER})
        // setSearchValue(event.target.value);
        return prompt('nothing')
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