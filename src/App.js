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
    },
    {
      name: "Banana",
      id: 2,
      price: 50,
      available: 1,
      category: "Fruits",
      vendor: "Organic farms",
    },
    {
      name: "Drumsticks",
      id: 3,
      price: 20,
      available: 0,
      category: "Vegetables",
      vendor: "Mallikarjuna farms",
    },
    {
      name: "Orange",
      id: 4,
      price: 25,
      available: 1,
      vendor: "Nagpur farms",
      category: "Fruits",
    },
  ];

  const dropdown = new Set();
  data.forEach((item) => {
    dropdown.add(item.category);
  });

  return (
    <>
      <Navbar />
      <Header />
      <FilterDrop list={dropdown} />
      <Main data={data} />
    </>
  );
}

export default App;
