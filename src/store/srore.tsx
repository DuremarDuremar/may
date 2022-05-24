import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({ userReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: "",
        },
      }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type TypeStore = ReturnType<typeof setupStore>;
export type TypeDispatch = TypeStore["dispatch"];
