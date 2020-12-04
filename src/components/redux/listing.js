const initialState = {
  loading:false
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
        loading: false
      }
    default:
      return state;
  }
}

export default listing;