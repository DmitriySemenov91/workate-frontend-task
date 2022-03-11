import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

type PhotoCardProps = {
  id: number;
  author: string;
  download_url: string;
};

export const MovieCard: React.FC<PhotoCardProps> = ({
  id,
  author,
  download_url,
}) => {
  return (
    <Link className={styles.root} to={`/${id}`}>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={download_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
