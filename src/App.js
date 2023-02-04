import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// api: http://www.omdbapi.com/?i=tt3896198&apikey=d2c65843
// apiKey: d2c65843

const API_URL = "http://www.omdbapi.com/?apikey=d2c65843";

// 使用静态数据做页面的设置，后面用动态数据替换掉。
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async function (title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };

  // 页面加载时，执行searchMovies函数
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(e.target.value);
          }}
        ></input>

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
