import { data } from "autoprefixer";
import "./App.css";
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
      category: "Vegtables",
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

  return (
    <div>
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;
