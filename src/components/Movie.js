import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';

const Movie = ({ id, year, title, summary, poster, genres, rating }) => {
    return (
        <div className="movie">
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                    rating
                }
            }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genres, index) => (
                            <li key={index} className="genres_genre">{genres}</li>
                        ))}
                    </ul>
                    <Rating defaultRating={Math.floor(rating)/2} maxRating={5} disabled />
                    <p className="movie__summary">{summary}</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired
}

export default Movie;