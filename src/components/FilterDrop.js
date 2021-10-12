import React from "react";

function FilterDrop() {
  return (
    <div>
      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="cars"
        id="cars"
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default FilterDrop;
