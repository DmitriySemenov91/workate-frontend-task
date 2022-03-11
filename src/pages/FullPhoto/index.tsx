import React from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";

import styles from "./FullPhoto.module.scss";

import { Photos } from "../Home";

import { Skeleton } from "@mui/material";

export const Index = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<Photos | null>();

  React.useEffect(() => {
    axios
      .get(`https://picsum.photos/id/${id}/info`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err: AxiosError) => {
        setData(null);
        console.warn("FullPhoto", err);
      });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.topBlock}>
        <div className={styles.poster}>
          {!data ? (
            <Skeleton
              animation="wave"
              width={230}
              height={300}
              variant="rectangular"
            />
          ) : (
            <img src={data.download_url} alt="test" />
          )}
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>
            {data?.author || (
              <Skeleton animation="wave" width={350} variant="text" />
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};
