import React, { useContext } from "react";
import { IdContext } from "../../IdContext.jsx";
import { Link } from "react-router-dom";

export default function SearchResults({ list, city }) {
  const [id, setId] = useContext(IdContext);
  const result = list.filter((it) =>
    it.location.city.toLowerCase().includes(city.toLowerCase())
  );

  function handleOnClick(itemId) {
    setId(itemId);
  }

  if (result.length === 0) {
    return (
      <div className="md:mt-20 text-center">
        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Unfortunately, there is no city bike network in {city}
        </p>
        <img src="/no-bike.png" alt="Sad face" className="mx-auto w-48" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 pt-10 px-2 md:px-10">
      {result.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 p-4 rounded-md bg-white flex flex-col text-center"
        >
          <div className=" flex-grow">
            <img src="/logo.jpeg" alt="logo" className="mx-auto" />
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.location.city}</p>
          </div>

          <div>
            <Link to={"/details"}>
              <div onClick={() => handleOnClick(item.id)}>See Details</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
