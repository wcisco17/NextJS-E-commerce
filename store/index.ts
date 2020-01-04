import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./combine";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default store;
