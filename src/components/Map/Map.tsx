import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = () => {
  return (
    <MapContainer
      center={[10.6515282, -71.6768356]}
      zoom={13}
      minZoom={4}
      scrollWheelZoom={false}
      style={{
        height: '400px',
        width: '100%',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.6515282, -71.6768356]}>
        <Tooltip offset={[-15, -8]} direction="top" permanent>
          ICCM
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
