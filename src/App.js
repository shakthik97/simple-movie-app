
import './App.css';
import { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import MovieCard from './MovieCard';



const API_URL = 'http://www.omdbapi.com/?apikey=1bf6a6e1';




const App = () => {

  const [moviesList, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       <div className='iosSearch'>
       <IoIosSearch
          onClick={() => searchMovies(searchTerm)}
        />
       </div>
      </div>

      {moviesList?.length > 0
          ? (
            <div className='container'>
              {moviesList.map((movie) => (
                <MovieCard movie={movie} />
              ))}

            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )}

    </div>


  );
}



export default App;
