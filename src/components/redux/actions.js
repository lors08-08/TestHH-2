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
