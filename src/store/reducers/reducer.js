import { combineReducers } from "redux";
import bookingReducer from "./booking.reducer";
export default combineReducers({booking:bookingReducer})