import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import './Home.css'

const Home = () => {
  const [ isLoading, setLoading ] = useState(true);
  const [movies, setMovies ] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort by=rating");
      
    setMovies(movies);
    setLoading(false);
  }

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id} 
              id={movie.id} 
              year={movie.year}
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </div>
      ) 
      }
    </div>
  );
}

export default Home;