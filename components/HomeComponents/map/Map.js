import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const MapComponent = (props) => {
  // const [data, setLocations] = useState([])

  const newicon = new L.icon({
    iconUrl: "/assets/marker.svg",
    iconSize: [50, 60],
  });

  return (
    <>
      <MapContainer
        whenCreated={(r) => {
          return props.map(r);
        }}
        center={
          props?.data?.[0]?.latitude
            ? [
                Number(props.data[0]?.latitude),
                Number(props.data[0]?.longitude),
              ]
            : [30.0511, 31.3656]
        }
        zoom={12}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", zIndex: 2 }}
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
    </>
  );
};
export default MapComponent;
