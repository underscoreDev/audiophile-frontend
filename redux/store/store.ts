import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/store/rootReducer";
import storageSession from "redux-persist/lib/storage/session";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "redux/api/auth.api";

const persistConfig = { key: "root", storage: storageSession };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
