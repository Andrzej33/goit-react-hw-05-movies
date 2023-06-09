import { fetchByQuery } from 'API/API';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { StyledForm } from 'components/StyledForm/StytledForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const getTrendyMovies = async () => {
      try {
        const { results } = await fetchByQuery(query);
        if (!results.length) {
          setMovies([]);
          return toast(`We find nothing about ${query}`);
        }
        setMovies(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendyMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchName = formData.get('name').toLowerCase();
    if (searchName.trim() === '') {
      return toast('Please enter your request');
    }

    setSearchParams({ query: searchName });
    e.target.reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </StyledForm>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
