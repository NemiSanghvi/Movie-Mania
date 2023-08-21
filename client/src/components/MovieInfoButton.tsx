import React from 'react';
import { Link } from 'react-router-dom';
import { MovieProp } from '../services/types';
import infoCircleSvg from '../assets/info-circle-svgrepo-com.svg'

const MovieInfoButton: React.FC<MovieProp> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <img
        src={infoCircleSvg}
        alt=""
        className="w-8 h-8"
      />
    </Link>
  );
};

export default MovieInfoButton;
