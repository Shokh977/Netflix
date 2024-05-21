import React, { useEffect, useState } from "react";
import requests from "../request";
import axios from "axios";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    axios.get(requests.popular).then((response)=>{
        setMovies(response.data.results)
    })
  },[])
  // console.log(movies,' moviean  in main');

  // Check if movies is not yet populated
  if (movies.length === 0) {
    return <div>Loading...</div>; // You can render a loading state or return null
  }

  // Randomly select a movie
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const trancateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 cursor-pointer">
              Play
            </button>
            <button className="border  border-gray-300 ml-4 py-2 px-5 cursor-pointer">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {trancateString(movie.overview, 140)}
          </p>
        </div>
      </div>
    </div>
  );
};
