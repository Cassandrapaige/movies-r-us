import React from "react";
import { withRouter } from "react-router-dom";

import { API_KEY } from "../base";

import withVideo from "../withVideo";

import FetchedResults from "../components/fetched-results/fetched-results.component";

const GenrePage = ({ action, match, history }) => {
  const id = Number(match.params.id);

  return (
    <FetchedResults
      action={action}
      title={match.params.genre}
      url={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`}
    />
  );
};

export default withVideo(withRouter(GenrePage));
