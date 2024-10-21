import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "../../Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const getData = async function () {
      setIsLoading(true);
      try {
        const data = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const sort = sortPlacesByDistance(data, latitude, longitude);
          setAvailablePlaces(sort);
          setIsLoading(false);
        });
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isLoading}
      loadingText="Fetching place data..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
