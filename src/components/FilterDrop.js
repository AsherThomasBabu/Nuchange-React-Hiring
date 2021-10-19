import React, { useState } from "react";

function FilterDrop(props) {
  const [searchbar, setsearchbar] = useState("");
  const changeHandler = (inp) => {
    setsearchbar(inp);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-9">
      <h4 className="text-xl font-light pr-2 text-center items-center">
        Filter by category
      </h4>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          props.handleFilter(e.target.value);
        }}
        name="cars"
        id="cars"
        className="bg-blue-400 rounded-md text-xl font-light p-2 text-white"
      >
        <option value="All">All</option>
        {[...props.list].map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <div className="flex justify-center">
        <input
          placeholder="enter your search query"
          className="w-36 font-normal bg-gray-100 m-3 border-2"
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            props.handleSearch(searchbar);
          }}
          className="bg-green-500 px-5 m-2"
        >
          Go!
        </button>
      </div>
    </div>
  );
}

export default FilterDrop;
