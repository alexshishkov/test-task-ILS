import axios from 'axios';
import polyline from '@mapbox/polyline';
import { DataType } from '../types';

let order: DataType;

export const createApiPath = (orderAPI: DataType) => {
  order = orderAPI
}

export async function getPolyline() {
  try {
    const response = await axios.get(`https://graphhopper.com/api/1/route?point=${order.fromLat},${order.fromIng}&point=${order.toLat},${order.toIng}&profile=car&locale=de&calc_points=true&key=d37c84f7-1ec9-4e02-b478-0f26b37545c7`);
    const polylineData = polyline.decode(response.data.paths[0].points);
    return polylineData
  } catch (error) {
    console.error(error);
  }
}