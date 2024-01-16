import { useState } from "react";
export default function SearchBox({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="mt-5 pr-2 pl-2 md:pr-10 md:pl-10">
      <h1 className="mb-5">Which city do you want to search?</h1>
      <div className="md:flex md:flex-row flex-col md:w-full md:items-center md:justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:flex-row"
        >
          <input
            type="text"
            className="md:w-3/4 border-solid border-2 border-sky-500 mb-2 md:mb-0 md:mr-4"
            value={searchValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full md:w-1/4 bg-blue-500 text-white p-2"
          >
            SEE RESULTS
          </button>
        </form>
      </div>
    </div>
  );
}
