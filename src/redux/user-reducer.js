import { allUserActions } from "./action-types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case allUserActions.ACTIVE_USER:
      return { currentUser: action.payload };
    default:
      return prevState;
  }
};

export default userReducer;
