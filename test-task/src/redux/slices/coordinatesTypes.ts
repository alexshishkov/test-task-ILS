import { ColumnsType } from 'antd/es/table';
import { LatLngExpression } from 'leaflet';
import { DataType } from '../../types';

export interface CoordinatesState {
  columns: ColumnsType<DataType>,
  coordinates: DataType[],
  polyline: LatLngExpression[],
  orderNumber: number,
  order: DataType
}