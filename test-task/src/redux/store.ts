import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/coordinatesSaga';
import coordinatesReducer from './slices/coordinatesSlice'

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
})

SagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();