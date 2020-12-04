import React, {useEffect} from "react"
import styles from "./App.module.css"
import Loader from "./components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "./components/redux/actions";

function App() {
  const dispatch = useDispatch();
  const loadingUsers = useSelector((state) => state.listing.loading);

  useEffect(() => {
    dispatch(loadUsers())
  })

  if(loadingUsers) {
    return <Loader />
  }
  return (
    <div className={styles.box}>

    </div>
  );
}

export default App;
