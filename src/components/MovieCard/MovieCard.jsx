import { StyledCardContainer } from './StyledMovieCard';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;

  const release = release_date ? `(${release_date.split('-')[0]})` : '';
  const roundedAverage = vote_average
    ? `Use Score: ${Number((vote_average * 10).toFixed(0))}%`
    : 'No Ranking';

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://dummyimage.com/450x550/a3dae6/020430&text=Movie+and+poster+should+be+here...';
  return (
    <StyledCardContainer>
      <img src={imageUrl} alt={original_title} />
      <div>
        <h2>
          {original_title ?? 'Unknown'}
          {release && <span>{release}</span>}
        </h2>
        <h3>{roundedAverage}</h3>
        {overview && (
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
        )}

        {genres && genres.length > 0 && (
          <div>
            <h3>Genres</h3> <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        )}
      </div>
    </StyledCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
