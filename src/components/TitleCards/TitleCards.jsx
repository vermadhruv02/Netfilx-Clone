import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const url =
    `https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjNjZDJhZmM5ZTk3YzRmYTkwYWIwNDZkNGI4NTkxNSIsInN1YiI6IjY2NGQ5YmQ2ZmYzOWVhZmJlYWNhYTkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHuKi6bbmWEFBgiT7F0Pf0Qv265itj1jSy4iChhHIMA",
    },
  };

  const handelWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handelWheel);

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {setApiData(json.results); console.log(json.results);})
      .catch((err) => console.error("error:" + err));
  }, []);


  return (
    <div className="title-cards">
      <h2>{title ?? "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, idx) => { 
          return (
            <Link to={`/player/${card.id}`} className="card" key={idx} >
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="Movie Image" />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
