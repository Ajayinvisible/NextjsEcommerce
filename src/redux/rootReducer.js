import { combineReducers } from "@reduxjs/toolkit";
import  authReducer from "./auth/authSlice.js";
import userPreferenceReducer from "./userPreference/userPreferenceSlice.js";
import productReducer from "./product/productSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
  product: productReducer,
});

export default rootReducer;