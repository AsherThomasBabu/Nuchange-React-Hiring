import React, { useState } from "react";

function Main(props) {
  const [Order, setOrder] = useState([]);
  const [edit, setEdit] = useState(false);
  let handleDelete = (item) => {
    let filteredArray = Order.filter((elem) => elem !== item);
    setOrder(filteredArray);
  };

  const updateqty = (elem, num) => {
    let updatedArray = [...Order];
    let objInd = Order.findIndex((obj) => obj.id === elem);
    if (updatedArray[objInd].qty + num >= 0) {
      updatedArray[objInd].qty = updatedArray[objInd].qty + num;
      setOrder(updatedArray);
    }
  };

  const getTotal = () => {
    let arr = Order.map((elem) => {
      return elem.qty * elem.price;
    });
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    return arr.length !== 0 ? arr.reduce(reducer) : null;
  };

  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              {props.data.map((item) => {
                return (
                  <div className="border-2 flex justify-between p-5 m-5">
                    <div className="flex justify-items-start">
                      <div className="">
                        <img src={item.img} className="h-20 w-20"></img>
                      </div>
                      <div className="pl-4">
                        <span className="p-2">{item.name}</span>
                        <span className="bg-blue-500 px-2 py-1 text-white rounded-md">
                          Price: ₹{item.price}
                        </span>
                        <p className="pt-2 px-2">Category: {item.category}</p>
                        <p className="px-2">Sold By: {item.vendor}</p>
                      </div>
                    </div>
                    <div className=" flex flex-col-reverse">
                      <div className="flex flex-row-reverse items-center align-bottom">
                        <button
                          onClick={() => {
                            if (!Order.includes(item)) {
                              setOrder([...Order, item]);
                            }
                          }}
                          className={
                            item.available === 1
                              ? "border-2  border-green-500 text-green-500 px-2 py-3 hover:text-white hover:bg-green-500"
                              : "border-2 pointer-events-none border-red-500 text-red-500 px-2 py-3"
                          }
                        >
                          {item.available === 1 ? "Buy Now" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
      <checkout>
        <div className="flex justify-center">
          <button
            onClick={() => setEdit(!edit)}
            className="px-3 py-2 bg-green-500 m-5 text-white"
          >
            Checkout {Order.length > 0 ? "(" + Order.length + ")" : null}
          </button>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col border-dashed border-gray-400 border-4">
            <h1 className="text-center text-3xl p-2">Total: ₹{getTotal()}</h1>
            {Order.map((item) => {
              return (
                <div>
                  <div className="border-2 flex justify-between p-5 m-3">
                    <div className="flex justify-between">
                      <div className="">
                        <img src={item.img} className="h-20 w-20"></img>
                      </div>
                      <div className="pl-4">
                        <span className="p-2">{item.name}</span>
                        <span className="bg-blue-500 px-2 py-1 text-white rounded-md">
                          Price: ₹{item.price}
                        </span>
                        <p className="px-2 mt-8">Sold By: {item.vendor}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          handleDelete(item);
                        }}
                        className="px-3 py-2 bg-red-500 m-2 text-white"
                      >
                        Delete
                      </button>
                      <div>
                        <button
                          onClick={() => {
                            updateqty(item.id, -1);
                          }}
                          className="px-3 py-2 bg-green-500 m-2 text-white"
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() => {
                            updateqty(item.id, 1);
                          }}
                          className="px-3 py-2 bg-green-500 m-2 text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </checkout>
    </div>
  );
}

export default Main;
