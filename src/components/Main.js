import React from "react";

function Main(props) {
  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-2">
              {props.data.map((item, index) => {
                return (
                  <div className="border-2 flex justify-between p-5 m-5">
                    <div className="flex justify-items-start">
                      <div className="">
                        <img src="#" className="h-20 w-20"></img>
                      </div>
                      <div className="pl-4">
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                      </div>
                    </div>
                    <div className=" flex flex-col-reverse">
                      <div className="flex flex-row-reverse items-center align-bottom">
                        <button className="border-2 px-2 py-3">
                          Add to Cart
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
