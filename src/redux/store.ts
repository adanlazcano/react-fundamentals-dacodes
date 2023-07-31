import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movies from "./reducers/movies";

export const store = configureStore({
  reducer: {
    movies,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
