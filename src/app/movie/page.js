import React from "react";
import MoviesCord from "../components/MoviesCord";
import styles from "@/app/styles/common.module.css"
const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "f6fcc6ea00msh45c0075477040c9p18a77bjsnd67343dddd9c",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const real_data = result.titles;

  // console.log(real_data[0].jawSummary.type);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {real_data.map((val) => {
              return (
                <>
                  <MoviesCord key={val.jawSummary.id} {...val} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
