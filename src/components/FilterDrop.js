import React from "react";

function FilterDrop(props) {
  return (
    <div className="flex justify-center mt-9">
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
    </div>
  );
}

export default FilterDrop;
