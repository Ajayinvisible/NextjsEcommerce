import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: 'shopsmart',
  storage,
  whitelist:['auth','userPreference']
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store,persistor };
