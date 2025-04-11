// features/Dashboard/components/Map/Map.tsx
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  id: number;
  name: string;
  address: string;
  pipeline: string;
  dueDate: string;
  chainage: string;
  landSurvey: string;
  latitude: number;
  longitude: number;
  description: string;
}

interface DashboardMapProps {
  center: [number, number];
  zoom?: number;
  location: Location;
  onSelectLocation: (location: Location) => void;
}

const SetMapCenter: React.FC<{ center: [number, number]; zoom: number }> = ({
  center,
  zoom,
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
};

const AttributionControl: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    map.attributionControl.setPrefix(false);
    map.attributionControl.addAttribution("&copy; OpenStreetMap contributors");
  }, [map]);

  return null;
};

export const DashboardMap: React.FC<DashboardMapProps> = ({
  center,
  zoom = 13,
  location,
  onSelectLocation,
}) => {
  return (
    <MapContainer style={{ height: "100%", width: "100%" }}>
      <SetMapCenter center={center} zoom={zoom} />
      <AttributionControl />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={center}
        eventHandlers={{
          click: () => onSelectLocation(location),
        }}
      >
        <Popup>{location.name}</Popup>
      </Marker>
    </MapContainer>
  );
};
