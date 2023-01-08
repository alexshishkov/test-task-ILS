import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux';
import { orderSelector, polylineSelector } from '../../redux/selectors/selectors';
import style from './Map.module.css'

const Map = () => {
  const order = useSelector(orderSelector);
  const polyline = useSelector(polylineSelector);

  return (
    <div className={style.wrapper}>
      <MapContainer className={style.map} center={[59.84660399, 30.52423701]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[order.fromLat, order.fromIng]}>
          <Popup>
            from here
          </Popup>
        </Marker>
        <Marker position={[order.toLat, order.toIng]}>
          <Popup>
            here
          </Popup>
        </Marker>
        <Polyline pathOptions={{ color: 'lime' }} positions={polyline} />
      </MapContainer>
    </div>
  )
}

export default Map;
