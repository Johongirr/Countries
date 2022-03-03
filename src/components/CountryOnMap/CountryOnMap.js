import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CountryPositionOnMap from "../CountryPosition/CountryPositionOnMap";
function CountryOnMap({ country }) {
  return (
    <div id="map" style={{ marginTop: "100px" }}>
      <MapContainer
        style={{ height: "500px" }}
        center={country[0]?.latlng}
        zoom={7}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={country[0]?.latlng} className="map__marker">
          <Popup>
            {country[0]?.capital}, {country[0].name}
          </Popup>
        </Marker>
        <CountryPositionOnMap coords={country[0]?.latlng} />
      </MapContainer>
    </div>
  );
}

export default CountryOnMap;
