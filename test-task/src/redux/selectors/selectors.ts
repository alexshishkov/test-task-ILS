import { RootState } from '../store';

export const all = (state: RootState) => state.coordinates

export const columnsSelector = (state: RootState) => all(state).columns
export const coordinatesSelector = (state: RootState) => all(state).coordinates
export const polylineSelector = (state: RootState) => all(state).polyline
export const orderNumbereSelector = (state: RootState) => all(state).orderNumber
export const orderSelector = (state: RootState) => all(state).order