import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlicer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'shopsmart',
  storage,
}
const persistedReducer = persistReducer(persistConfig,authReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store,persistor };
