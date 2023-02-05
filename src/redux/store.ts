import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers/mainSlice';

const store = configureStore({
  reducer: {
    main: mainReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export type StateType = ReturnType<typeof store.getState>
export type DispachType = typeof store.dispatch

export default store;
