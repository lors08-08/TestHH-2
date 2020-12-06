import React from "react";
import styles from "./Loader.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loader() {
  return (
    <div className={styles.box}>
      <div className={styles.spinner}>
        <CircularProgress />
        <div>Пожалуйста, подождите идет загрузка персонала</div>
      </div>
    </div>
  );
}

export default Loader;
