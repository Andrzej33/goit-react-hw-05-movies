import PropTypes from 'prop-types';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { useLocation } from 'react-router-dom';
import { StyledMovieList } from './StyledMovieList';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledMovieList>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}{' '}
            {movie.title !== movie.original_title && (
              <span>:({movie.original_title})</span>
            )}
          </StyledLink>
        </li>
      ))}
    </StyledMovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
