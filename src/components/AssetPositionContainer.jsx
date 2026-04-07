import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useEffect, useState } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


import AxiosApi from '../utils/httpRequestHandler';
import APIConstants from '../constants/apiConatants';
import { AppContext } from '../core/context/appContext';

/*
function VehicleMap() {
  const lat = 22.5726;
  const lng = 88.3639;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>Vehicle Current Position</Popup>
      </Marker>
    </MapContainer>
  );
}
*/




// Custom vehicle icon
const vehicleIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/744/744465.png',
  iconSize: [35, 35],
  iconAnchor: [17, 35]
});

function VehicleMap() {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: 'Truck-101',
      lat: 22.5726,
      lng: 88.3639
    },
    {
      id: 2,
      name: 'Car-202',
      lat: 22.5826,
      lng: 88.3739
    },
    {
      id: 3,
      name: 'Van-303',
      lat: 22.5626,
      lng: 88.3539
    }
  ]);

  // Simulate live movement every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prev =>
        prev.map(vehicle => ({
          ...vehicle,
          lat: vehicle.lat + Math.random() * 0.001,
          lng: vehicle.lng + Math.random() * 0.001
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={[22.5726, 88.3639]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        {/* OpenStreetMap */}
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {/* Multiple Vehicles */}
        {vehicles.map(vehicle => (
          <Marker
            key={vehicle.id}
            position={[vehicle.lat, vehicle.lng]}
            icon={vehicleIcon}
          >
            <Popup>
              <b>{vehicle.name}</b><br />
              Lat: {vehicle.lat}<br />
              Lng: {vehicle.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

const AssetPositionContainer = () => {
  const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);

React.useEffect(() => {
    getData();
  }, []);

  const getData = async (selectedGroupId) => {
    try {
      let params = {  };
      handleBackDrop(true);
      let response = await AxiosApi.getData(APIConstants.GPS_DATA_GET, params);
      handleBackDrop(false);
      console.log(response);
      if (response.data) {
        // setRows(response.data);
      }
    } catch (error) {
      console.error(error);
      setRows([]);
    }
  }



    return <VehicleMap />
}

export default AssetPositionContainer;