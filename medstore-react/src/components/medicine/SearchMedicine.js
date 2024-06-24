import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import checkAuth from "../auth/checkAuth";

function SearchMedicine({ setFilteredMedicine }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const user = useSelector((store) => store.auth.user);

  const handleSearchInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setNoResults(false);

    if (value.trim() === "") {
      setFilteredMedicine([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://medicalstore.mashupstack.com/api/medicine/search?keyword=${value}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const filteredData = response.data.filter(item =>
        item.name.toLowerCase().startsWith(value.toLowerCase())
      );
      if (filteredData.length === 0) {
        setNoResults(true);
      } else {
        setFilteredMedicine(filteredData);
      }
    } catch (error) {
      console.error("Error searching medicines:", error);
    }
  };

  return (
    <div>
      <form className="d-flex align-items-center">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search Medicine Here . . ."
          className="form-control mr-2 "
          onChange={handleSearchInputChange}
        />
      </form> <br/>
      {noResults && <p className="text-center">No matching results found.</p>}
    </div>
  );
}

export default checkAuth(SearchMedicine);
