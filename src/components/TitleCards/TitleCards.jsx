import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
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
      Authorization: import.meta.env.REACT_APP_FIREBASE_THE_MOVIE_DB,
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
      .then((json) => {setApiData(json.results); })
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
