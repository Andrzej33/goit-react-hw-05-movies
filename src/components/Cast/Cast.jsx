import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchCreditsById } from 'API/API';
import { Loader } from 'components/Loader/Loader';
import { CastList, ImageCard } from './CastStyled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getActors = async () => {
      setIsLoading(true);
      try {
        const res = await fetchCreditsById(movieId);
        const { cast } = res;
        // console.log(cast);
        setActors(cast);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getActors();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {actors.length ? (
        <CastList>
          {actors.map(actor => (
            <li key={actor.id}>
              <ImageCard>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=Image+not+found`}
                  alt="Not found"
                />
              )}
              </ImageCard>
              <h3>{actor.name}</h3>
              <p>Character : {actor.character}</p>
            </li>
          ))}
        </CastList>
      ) : (
        <p>We do not have any information about actors</p>
      )}
    </>
  );
};

export default Cast;
