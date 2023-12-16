import React, { useEffect, useState } from "react";
import "./../scss/map-component.scss";
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { mapCenter, mapMarkers } from "../raw-data/geo-data";

export interface LatLngMarkers {
  lat: number;
  lng: number;
}

export const MapComponent = () => {
  const [markers, setMarkers] = useState<LatLngMarkers[]>([]);
  const [centerPoint, setCenterPoint] = useState<LatLngMarkers>({
    lat: 43.662217, // default latitude
    lng: -79.371212, // default longitude
  });
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };
  useEffect(() => {
    setMarkers(mapMarkers);
    setCenterPoint(mapCenter);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY as string,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="map-compo-wrapper">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={centerPoint}
        options={{
          mapTypeControl: false,
        }}
      >
        <Marker
          position={centerPoint}
          icon={{
            url: require("./../Assets/Group142.svg").default,
            scale: 7,
          }}
        />
        {markers && markers.length
          ? markers.map((marker: LatLngMarkers, index: number) => {
              return (
                <MarkerF
                  key={index}
                  position={{
                    lat: marker.lat, // default latitude
                    lng: marker.lng, // default longitude
                  }}
                  icon={{
                    url: require("./../Assets/Group142.svg").default,
                    scale: 7,
                  }}
                />
              );
            })
          : null}
      </GoogleMap>{" "}
    </div>
  );
};

export default MapComponent;
