import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  style from "./Webpage.module.css"
import moviesData from "./jsondata.json";

const Webpage = () => {
  const [languageFilter, setLanguageFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const filteredMovies = moviesData.filter((movie) => {
    return (
      (languageFilter === "" ||
        movie.movielanguages.includes(languageFilter)) &&
      (countryFilter === "" || movie.moviecountries.includes(countryFilter)) &&
      (genreFilter === "" || movie.moviegenres.includes(genreFilter))
    );
  });

  return (
    <Container fluid>
      
      <h1 className={style.title}>List of Movies</h1>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Language:</Form.Label>
              <Form.Control
                as="select"
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
              >
                <option value="">All</option>
                {[
                  "Hindi",
                  "Malayalam",
                  "Kannada",
                  "Tamil",
                  "English",
                  "Japanese",
                  "Chinese",
                  "Spanish",
                  "Korean",
                  "Telugu",
                ].map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Country:</Form.Label>
              <Form.Control
                as="select"
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
              >
                <option value="">All</option>
                {[
                  "Australia",
                  "Canada",
                  "Germany",
                  "France",
                  "United Kingdom",
                  "Ireland",
                  "India",
                  "Norway",
                  "United States",
                ].map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Genre:</Form.Label>
              <Form.Control
                as="select"
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
              >
                <option value="">All</option>
                {[
                  "Action",
                  "Adventure",
                  "Fantasy",
                  "Documentary",
                  "Crime",
                  "Romance",
                  "Thriller",
                  "Biography",
                  "Sport",
                  "Comedy",
                  "Drama",
                ].map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
     
      <Row>
        
        {filteredMovies.map((movie, index) => (
          <Col key={index}>
            <div className={style.cd}>
              <h2>{movie.movietitle}</h2>
              <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />
              <p> <span>IMDB ID:</span> {movie.imdbmovieid}</p>
              <p> <span></span>Languages: {movie.movielanguages.join(", ")}</p>
              <p> <span>Countries:</span> {movie.moviecountries.join(", ")}</p>
              <p> <span>Genres: </span>{movie.moviegenres.join(", ")}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Webpage;
