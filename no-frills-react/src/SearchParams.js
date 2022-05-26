import { useState } from "react";

export const SearchParams = () => {
  //   const location = "São Paulo, Brazil";
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)} // target is the input, then it's gonna pull up the value
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
