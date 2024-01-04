import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default () => {
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CiSearch className="search-btn" />
      </div>
    </>
  );
};
