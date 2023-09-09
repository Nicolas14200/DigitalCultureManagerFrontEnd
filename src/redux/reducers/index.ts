import { combineReducers } from "redux";
import  plotReducer from "./plot.reducer";
import userReducer from "./user.reducer";


export default combineReducers ({
    // REDUCERS
    plotReducer,
    userReducer
})