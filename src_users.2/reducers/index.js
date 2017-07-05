import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "user_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the User edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  users: users,
  modal:modal
});

function modal(state = {}, action) {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return Object.assign({}, state,{classValue:"hide"});

    // initial state
    default:
      return state;
  }
}