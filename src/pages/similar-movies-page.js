import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { API_KEY } from "../base";

import FetchedResults from "../components/fetched-results/fetched-results.component";

import withVideo from "../withVideo";

const SimilarView = ({ action, match }) => {
  const [results, setResults] = useState([]);
  let id = match.params.movie_id;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((results) => setResults(results.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <FetchedResults
      action={action}
      title={`Movies similar to ${results.original_title}`}
      error='Apparently this movie is just so original that no other can compare.'
      url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`}
    />
  );
};

export default withVideo(withRouter(SimilarView));
