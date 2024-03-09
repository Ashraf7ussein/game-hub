import React from "react";
import useGernres from "../hoosk/useGenres";

const GenreList = () => {
  const { genres } = useGernres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
