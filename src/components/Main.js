import React, { useState } from "react";

function Main(props) {
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
    </div>
  );
}

export default Main;
