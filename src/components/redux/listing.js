const initialState = {
  loading: false,
  users: [],
};

function listing(state = initialState, action) {
  switch (action.type) {
    case "listing/load/start":
      return {
        ...state,
        loading: true,
      };
    case "listing/load/succeed":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "listing/filtration/start":
      return {
        ...state,
        filtrating: true,
      };
    case "listing/filtration/succeed":
      return {
        ...state,
        users: action.payload,
        filtrating: false,
      };
    default:
      return state;
  }
}

export default listing;
