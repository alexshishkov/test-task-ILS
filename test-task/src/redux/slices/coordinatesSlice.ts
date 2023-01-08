import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CoordinatesState } from './coordinatesTypes'
import { LatLngExpression } from 'leaflet'
import { DataType } from '../../types'
import { createApiPath } from '../../api/api'

const initialState: CoordinatesState = {
  columns: [
    {
      title: 'Номер заявки',
      dataIndex: 'key',
    },
    {
      title: 'Координаты от lat',
      dataIndex: 'fromLat',
    },
    {
      title: 'Координаты от ing',
      dataIndex: 'fromIng',
    },
    {
      title: 'Координаты до lat',
      dataIndex: 'toLat',
    },
    {
      title: 'Координаты до ing',
      dataIndex: 'toIng',
    },
  ],
  
  coordinates: [
    {
      key: 1,
      fromLat: 59.84660399,
      fromIng: 30.29496392,
      toLat: 59.82934196,
      toIng: 30.42423701
    },
    {
      key: 2,
      fromLat: 59.82934196,
      fromIng: 30.42423701,
      toLat: 59.82761295,
      toIng: 30.41705607
    },
    {
      key: 3,
      fromLat: 59.83567701,
      fromIng: 30.38064206,
      toLat: 59.84660399,
      toIng: 30.29496392
    },
    {
      key: 4,
      fromLat: 59.84660399,
      fromIng: 30.29496392,
      toLat: 59.82761295,
      toIng: 30.41705607
    },
    {
      key: 5,
      fromLat: 59.83567701,
      fromIng: 30.38064206,
      toLat: 59.84660399,
      toIng: 30.29496392
    },
  ],
  polyline: [],
  orderNumber: 1,
  order: {
    key: 4,
      fromLat: 59.84660399,
      fromIng: 30.29496392,
      toLat: 59.82761295,
      toIng: 30.41705607
  }
}

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    setPolyline: (state, action: PayloadAction<LatLngExpression[]>) => {
        state.polyline = action.payload;
    },
    setOrderNumber: (state, action: PayloadAction<number>) => {
      state.orderNumber = action.payload;
    },
    setOrder: (state, action: PayloadAction<DataType>) => {
      state.order = action.payload;
      createApiPath(action.payload);
    },
  },
})

export const { setPolyline, setOrderNumber, setOrder } = coordinatesSlice.actions

export default coordinatesSlice.reducer