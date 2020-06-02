import { allUserActions } from "./action-types";

export const userAction = (currentUser) => ({
  type: allUserActions.ACTIVE_USER,
  payload: currentUser,
});
