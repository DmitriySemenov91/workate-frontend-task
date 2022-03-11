import React from "react";
import axios from "axios";

import { MovieCard } from "../components/Card";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export type Photos = {
  id: number;
  author: string;
  download_url: string;
};

export const Home = () => {
  const [photos, setPhotos] = React.useState<Photos[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const [loadMore, setLoadMore] = React.useState(3);

  React.useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?limit=${loadMore}`)
      .then(({ data }) => {
        setPhotos(data);
      });
  }, [loadMore]);

  return (
    <>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        variant="outlined"
        placeholder="Find Author..."
      />
      <br />
      <br />
      <div className="photos">
        {photos
          .filter((obj) =>
            obj.author
              .toLocaleLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          )
          .map((obj) => (
            <MovieCard
              key={obj.id}
              id={obj.id}
              author={obj.author}
              download_url={obj.download_url}
            />
          ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <Button onClick={() => setLoadMore(loadMore + 3)}>Next</Button>
      </div>
    </>
  );
};
