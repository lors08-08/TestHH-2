import React from 'react';
import styles from "./Table.module.css"

function Table() {
  return (
    <div className={styles.box}>
      <table className={styles.table}>
        <tr className={styles.cellTop}>
          <th>ID</th>
          <th>Дата Регистрации</th>
          <th>ФИО</th>
          <th>Должность</th>
          <th>Почта(логин)</th>
          <th>Пароль</th>
          <th>Телефон, првязанный к мессенджеру</th>
        </tr>
      </table>
    </div>
  );
}

export default Table;