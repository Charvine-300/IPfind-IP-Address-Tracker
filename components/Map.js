import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import Cicon from '../public/icon-location.svg'
import styles from '../styles/Home.module.css'

const Map = ({lng, lat, data1, data2}) => {
  const skater = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: [46, 56]
  });

  return ( 
    <MapContainer center={[lat, lng]} zoom={18} scrollWheelZoom={false} id={styles.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={skater}>
        <Popup>
          {data1} <br /> {data2}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
 
export default Map;