import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const Map = ({ origin, destination, waypoints }) => {
  const [directions, setDirections] = useState(null);

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    }
  };

  return (
    <GoogleMap
      center={origin}
      zoom={10}
    >
      <DirectionsService
        options={{
          origin,
          destination,
          waypoints,
          travelMode: 'DRIVING',
        }}
        callback={directionsCallback}
      />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Map;
