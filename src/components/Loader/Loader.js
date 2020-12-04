import React from 'react';
import styles from "./Loader.module.css"
import CircularStatic from "../../styles/CircularProgressWithLabel";

function Loader() {

  return (
    <div className={styles.box}>
      <div className={styles.spinner}>
        <CircularStatic />
        <div>Пожалуйста, подождите идет загрузка персонала</div>
      </div>
    </div>
  );
}

export default Loader;