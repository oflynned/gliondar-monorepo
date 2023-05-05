import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import { useTheme } from '@mui/material';

type Map = google.maps.Map;

type Props = {
  coordinates?: {
    latitude: number;
    longitude: number;
  };
};

export const Map: FunctionComponent<PropsWithChildren<Props>> = ({
  coordinates = { latitude: 53.343337, longitude: -6.260073 },
  children,
}) => {
  const theme = useTheme();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // TODO move this to some config service or config hook
    //      eg useConfig() which returns some result type helper
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [, setMap] = useState<Map | null>(null);

  const onLoad = useCallback((map: Map) => {
    map.setOptions({
      disableDoubleClickZoom: true,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      draggable: false,
      clickableIcons: false,
    });

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        border: `1px solid ${theme.palette.divider}`,
      }}
      center={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      />
      {children}
    </GoogleMap>
  );
};
