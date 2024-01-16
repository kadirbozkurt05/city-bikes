import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

export default function Main() {
  const [city, setCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const url = "https://api.citybik.es/v2/networks/";

  const { data, loading, error } = useFetch(url);

  const geoApiKey= import.meta.env.VITE_REACT_APP_GEO_API_KEY;

  const { data: ipData } = useFetch(
    `https://api.geoapify.com/v1/ipinfo?&apiKey=${geoApiKey}`
  );
  useEffect(() => {
    if (ipData && ipData.city && ipData.city.name) {
      setCity(ipData.city.name);
    }
  }, [ipData]);

  const handleSearch = (cityFromUser) => {
    setCity(cityFromUser);

    const filteredResults = data.networks.filter((it) =>
      it.location.city.toLowerCase().includes(cityFromUser.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  if (loading) {
    return (
      <>
        <SearchBox onSearch={handleSearch} />
        <div>
          <img
            className="mx-auto mt-20 h-80"
            src="/loading.gif"
            alt="loading-animation"
          />
        </div>
        ;
      </>
    );
  }

  if (error) {
    console.log(error);
    return <div>Error..</div>;
  }
  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <p className="md:px-10 md:mt-6 px-2 mt-4">
        Your city is {ipData ? ipData.city.name : "Unknown"}
      </p>
      <SearchResults list={data.networks} city={city} />
    </>
  );
}
