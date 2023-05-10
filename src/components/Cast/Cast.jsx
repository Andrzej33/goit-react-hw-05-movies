import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCreditsById } from "API/API";
import { Loader } from "components/Loader/Loader";

 const Cast = () => {
    const { movieId } = useParams();
    const[actors,setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const getActors = async () => {
          setIsLoading(true)
            try {
              const res = await fetchCreditsById(movieId) 
              const {cast} = res;
              setActors(cast)
             
            } catch (error) {
              console.log(error.message);
            }
            finally{setIsLoading(false)}
          }
        getActors()
      },[movieId]);

    return(
       <>
       {isLoading && <Loader/>}
       {actors.length ? (
        <ul>{actors.map(actor => 
            <li key={actor.id}>
                {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <img
                      src={`https://via.placeholder.com/200x300?text=No+Image`}
                      alt={actor.name}
                    />
                  )}
                <h3>Name: {actor.name}</h3>
                <p>Character: {actor.character}</p>
            </li>)}</ul> ) : (
               <p>We do not have any information about actors</p> 
            )

       }
       </>
    )
}

export default Cast;