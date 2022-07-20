import React, { useContext } from "react";
import AppContext from "..";

const Filter = () => {
  const { setCategory } = useContext(AppContext);
  
  // Changing the category
  const handleChange = (e) => {
    if(e.target.value === "popular"){
      return setCategory(null);
    }
    setCategory(e.target.value);
  }

  // With the api we can make this list dynamic by fetching all the categories
  return (
      <select name="category" id="category" onChange={(e) => handleChange(e)}>
        <option value="popular">Popular</option>
        <option value="18">Action</option>
        <option value="28">Drama</option>
      </select>
  );
}

export default Filter;