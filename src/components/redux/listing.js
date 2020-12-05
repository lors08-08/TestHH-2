const initialState = {
  loading:false,
  users: []
};

function listing(state = initialState, action) {
  switch (action.type) {
    case "listing/load/start":
      return {
        ...state,
        loading: true
      }
    case "listing/load/succeed":
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default listing;