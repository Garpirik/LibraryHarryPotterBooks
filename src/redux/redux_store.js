import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import {thunk as thunkMidleware} from "redux-thunk";
import bookPageReducer from "./bookPageReducer";
// import activityPageReducer from "./activityPageReducer";
const reducers = combineReducers({
    books :  bookPageReducer ,
})

let store = createStore(reducers, applyMiddleware(thunkMidleware))
window.store = store;
export default store;