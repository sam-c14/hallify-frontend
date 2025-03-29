// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./slice/example";
import authReducer from "./slice/auth";

// Define static reducers
const staticReducers = {};

// Function to create the root reducer
const createRootReducer = () =>
  combineReducers({
    ...staticReducers,
    example: exampleReducer,
    auth: authReducer,
  });

// Create the store
export const store = configureStore({
  reducer: createRootReducer(),
  devTools: process.env.NODE_ENV !== "production", // Enable devTools in development only
});

export const useAppDispatch = () => store.dispatch;
export const useAppSelector = (selector) => selector(store.getState());

export default store;
