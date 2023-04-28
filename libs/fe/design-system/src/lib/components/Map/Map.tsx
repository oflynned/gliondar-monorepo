import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

type Map = google.maps.Map;

export const Map: FunctionComponent<PropsWithChildren> = ({ children }) => {
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
      }}
      center={{ lat: 53.343337, lng: -6.260073 }}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {children}
    </GoogleMap>
  );
};
