export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: "listing/load/start" });
    fetch("http://localhost:3010/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "listing/load/succeed",
          payload: json,
        });
      });
  };
}

export function filteredUsers(filteredList) {
  return (dispatch) => {
    dispatch({ type: "listing/filtration/start" });
    dispatch({
      type: "listing/filtration/succeed",
      payload: filteredList,
    });
  };
}

export function addUser(name, date, spot, login, password, number) {
  return (dispatch) => {
    dispatch({ type: "listing/add/start" });
    fetch("http://localhost:3010/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        date: date,
        spot: spot,
        mail: login,
        password: password,
        number: number,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "news/add/succeed",
          payload: json,
        });
      });
  };
}

