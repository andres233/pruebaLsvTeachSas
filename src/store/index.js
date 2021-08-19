import { createStore, combineReducers,applyMiddleware } from "redux";
import userReducer from "./user/reducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
    userReducer
});

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(
//     reducers,
//     // composeWithDevTools(applyMiddleware(thunk))
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
export default store;

