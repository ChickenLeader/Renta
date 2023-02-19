import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const MapComponent = (props) => {
  // const [data, setLocations] = useState([])

  const newicon = new L.icon({
    iconUrl: "/assets/icons/map-pin.svg",
    iconSize: [30, 40],
  });

  return (
    <>
      {props.data ? (
        <MapContainer
          whenCreated={(r) => {
            return props.map(r);
          }}
          center={[
            Number(props.data[0]?.latitude),
            Number(props.data[0]?.longitude),
          ]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ width: "100%", height: 390, zIndex: 2 }}
          zoomControl={true}
          doubleClickZoom={true}
          boxZoom
          dragging
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props?.data.map((location, index) => (
            <Marker
              key={index}
              position={[Number(location.latitude), Number(location.longitude)]}
              icon={newicon}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <></>
      )}
    </>
  );
};
export default MapComponent;
