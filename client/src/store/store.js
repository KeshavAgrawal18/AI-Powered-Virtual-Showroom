import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import carReducer from "./reducers/carReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  car: carReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
