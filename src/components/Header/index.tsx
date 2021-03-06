import { Button } from "@mui/material";
import React from "react";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/">
        <h3 className={styles.logo}>Workate — Frontend Task</h3>
      </Link>
      <div className={styles.rightSide}>
        <div className={styles.links}>
          <Button>Soon feature</Button>
          <Button>Soon feature</Button>
        </div>
      </div>
    </header>
  );
};
