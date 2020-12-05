import React, {useEffect} from "react"
import styles from "./App.module.css"
import Loader from "./components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "./components/redux/actions";
import Header from "./components/MainBox/Header/Header";
import List from "./components/MainBox/ListBox/List";
import Filter from "./components/MainBox/Filter/Filter";
import Table from "./components/MainBox/Table/Table";

function App() {
  const dispatch = useDispatch();
  const loadingUsers = useSelector((state) => state.listing.loading);

  useEffect(() => {
    dispatch(loadUsers())
  },[dispatch])

  if(loadingUsers) {
    return <Loader />
  }
  return (
      <div className={styles.box}>
          <Header />
          <Filter />
          <List />
          <Table />
      </div>
  );
}

export default App;
