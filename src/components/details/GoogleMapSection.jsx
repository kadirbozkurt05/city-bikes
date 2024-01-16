import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function GoogleMapSection(props) {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="mb-4 px-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
