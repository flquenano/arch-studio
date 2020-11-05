import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Wrapper } from "./map.css.js";

export const Map = ({ offices, markerRefs, mapRef }) => {
  return (
    <Wrapper ref={mapRef}>
      <MapContainer
        center={[33.329845, -91.205695]}
        zoom={5}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {offices.map((office, idx) => (
          <Marker
            key={idx}
            position={[
              office.coordinates.latitude,
              office.coordinates.longitude
            ]}
            ref={markerRefs[idx]}
          >
            <Popup>
              {office.title} <br /> {office.address}.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Wrapper>
  );
};

Map.propTypes = {
  offices: PropTypes.array.isRequired,
  markerRefs: PropTypes.array.isRequired,
  mapRef: PropTypes.object.isRequired
};
