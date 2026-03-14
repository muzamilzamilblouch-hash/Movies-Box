import React, { useState } from 'react';
import './App.css';

const moviesData = [
  { id: 1, title: "Dune: Part Two", year: 2024, rating: "8.5", genre: "Sci-Fi", image: "https://image.tmdb.org/t/p/w780/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg" },
  { id: 2, title: "Oppenheimer", year: 2023, rating: "8.3", genre: "Drama", image: "https://image.tmdb.org/t/p/w780/ptpr0kGAckfQkJeJIt8st5dglvd.jpg" },
  { id: 3, title: "Spider-Man: Across the Spider-Verse", year: 2023, rating: "8.6", genre: "Animation", image: "https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" },
  { id: 4, title: "The Batman", year: 2022, rating: "7.8", genre: "Action", image: "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 5, title: "John Wick: Chapter 4", year: 2023, rating: "7.9", genre: "Action", image: "https://image.tmdb.org/t/p/w780/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg" },
  { id: 6, title: "Mad Max: Fury Road", year: 2015, rating: "8.1", genre: "Action", image: "https://image.tmdb.org/t/p/w780/hA2ple9q4qnwxp3hKVNhroipsir.jpg" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies = moviesData.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app-container">
      <header className="header">
        <p className="subtitle">CURATED CINEMA PICKS</p>
        <h1>Movies Box</h1>
        <p className="description">Discover top-rated titles and filter your next watch in seconds.</p>
      </header>

      <section className="controls">
        <div className="search-box">
          <label>Search Movies</label>
          <input 
            type="text" 
            placeholder="Search by title..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="genre-filters">
          {["All", "Action", "Animation", "Drama", "Sci-Fi"].map(genre => (
            <button 
              key={genre}
              className={selectedGenre === genre ? "active" : ""}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <p className="results-text">Showing {filteredMovies.length} of {moviesData.length} movies</p>
      </section>

      <main className="movie-grid">
        {filteredMovies.map(movie => (
          <article key={movie.id} className="movie-card">
            <div className="poster-wrapper">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="card-content">
              <div className="card-header">
                <span className="genre-tag">{movie.genre}</span>
                <span className="rating">? {movie.rating}</span>
              </div>
              <h3>{movie.title}</h3>
              <p className="year">{movie.year}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;