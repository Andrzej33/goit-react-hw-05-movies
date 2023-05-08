import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCreditsById } from "API/API";

export const Cast = () => {
    const { movieId } = useParams();
    const[actors,setActors] = useState([]);

    useEffect(()=>{
        const getActors = async () => {
            try {
              const res = await fetchCreditsById(movieId) 
              const {cast} = res;
              setActors(cast)
             
            } catch (error) {
              console.log(error.message);
            }
          }
        getActors()
      },[movieId]);

    return(
       <>
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