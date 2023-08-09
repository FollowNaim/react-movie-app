// This Code is Coded And Designed By @Naim
// Original Author And Developer is @Naim
// Give Proper Credit If u use it.
// All Rights Reserved By @Naim
// https://github.com/FollowNaim

import {useEffect, useState} from 'react';
import searchIcon from './search.svg'
import MovieCard from './components/MovieCard';
import Footer from './components/Footer'
function App(){
 
 // making The Variables for track
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const API_URL = 'https://www.omdbapi.com?apikey=1796c72d';
  
  // Fetching Api 
  
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || [])
    setSearchClicked(true)
  } 
  useEffect(()=>{
  },[])
  
  // For google search button 
  
  const google = ()=>{
    window.location.href = `https://google.com/search?q=movie:${searchTerm}`;
  }
  
  // Main Function
  
  return(
    <div className="app">
    <h1>Movies App</h1>
    <div className="search">
    <input 
    placeholder="Search For Movies"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <img 
    src={searchIcon}
    alt="Search Icon"
    onClick={()=>searchMovies(searchTerm)}
    onKeyPress={e=>e.key === 'Enter'?searchMovies(searchTerm):null}
    />
    </div>
    
    {/* Checking array is empty or not and applying condition*/}
    
    {
      movies?.length > 0 
      ? 
    (
      <div className="container">
    {movies.map((movie)=>(
      <MovieCard movie={movie} />
      ))}
    </div>
    )
    :
    
    (
      // Init screen raise an msg 
      <div className="empty">
    {searchTerm === '' ? (
      <>
      <h2>Enter A Movie Name To Search </h2>
      <Footer />
      </>
      ):
      //tracking search clicked true and searchTerm isn't equal = condition is true then raise an error
      searchClicked && searchTerm !== '' &&
      (
      <>
    <h2>No Movies Found with<span className="movieName"> {searchTerm}</span> </h2>
    <div className="searchGoogle">
    <h4>You searched Wrong Movie</h4>
    <p>Search it on</p>
    <button className="btn" onClick={google}>Google</button>
    <Footer />
    </div>
    </>
    )}
    </div>
    )}
    </div>
)};

export default App;

// React END

// This Code is Coded And Designed By @Naim
// Original Author And Developer is @Naim
// Give Proper Credit If u use it.
// All Rights Reserved By @Naim
// https://github.com/FollowNaim

