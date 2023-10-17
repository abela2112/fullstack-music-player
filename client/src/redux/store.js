import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../redux/features/songs";
import userReducer from "../redux/features/user";
import playerReducer from "../redux/features/player";
import createSagaMiddleware from "redux-saga";
import {
  persistReducer,
  persistStore,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, userReducer);
const sagaMiddleware = createSagaMiddleware();
import { rootSaga } from "./services";
const store = configureStore({
  reducer: {
    songs: songsReducer,
    player: playerReducer,
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      ignoreActions: [PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE, FLUSH],
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
