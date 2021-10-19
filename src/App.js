import React, { useState } from "react";
import "./App.css";
import FilterDrop from "./components/FilterDrop";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      name: "Potato",
      id: 1,
      price: 30,
      available: 1,
      vendor: "Himachal Pvt Ltd",
      category: "Vegetables",
      img: "https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
      qty: 1,
    },
    {
      name: "Banana",
      id: 2,
      price: 50,
      available: 1,
      category: "Fruits",
      vendor: "Organic farms",
      img: "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1",
      qty: 1,
    },
    {
      name: "Drumsticks",
      id: 3,
      price: 20,
      available: 0,
      category: "Vegetables",
      vendor: "Mallikarjuna farms",
      img: "https://www.groids.com/wp-content/uploads/2020/10/Drumstick.jpg",
      qty: 1,
    },
    {
      name: "Orange",
      id: 4,
      price: 25,
      available: 1,
      vendor: "Nagpur farms",
      category: "Fruits",
      img: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
      qty: 1,
    },
  ];

  const dropdown = new Set();
  data.forEach((item) => {
    dropdown.add(item.category);
  });
  const [display, setDisplay] = useState([...data]);

  const handleFilter = (val) => {
    if (val === "All") {
      setDisplay([...data]);
    } else {
      setDisplay([
        ...data.filter((item) => {
          return item.category === val;
        }),
      ]);
    }
  };

  const handleSearch = (val) => {
    setDisplay([
      ...data.filter((item) => {
        console.log(item.name);
        console.log(val);
        return item.name.includes(val);
      }),
    ]);
  };
  return (
    <>
      <Navbar />
      <Header />
      <FilterDrop
        list={dropdown}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
      />
      <Main data={display} />
    </>
  );
}

export default App;
