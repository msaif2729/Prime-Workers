import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <div className="h-[20%] w-full">
      <MapContainer
        center={[51.505, -0.09]} // Latitude and Longitude for initial center
        zoom={13} // Zoom level
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A sample popup. <br /> You can customize it!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
