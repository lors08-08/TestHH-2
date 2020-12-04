import React, {useEffect} from "react"
import styles from "./App.module.css"
import Loader from "./components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "./components/redux/actions";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/MainBox/Header/Header";
import List from "./components/MainBox/ListBox/List";

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
    <Router>
      <div className={styles.box}>
        <Header />
        <List />
      </div>
    </Router>
  );
}

export default App;
