const user = (currentUser = null, action) => {
  switch (action.type) {
    case "ACTIVE_USER":
      return currentUser;
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
