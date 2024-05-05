import React from "react";
import Cards from "./Cards";

function Forecast({ data1, data2, photo }) {
  if (!data1 && !data2) {
    return <div className="text-center text-4xl">Loading...</div>;
  } else if (data1 && data2) {
    return (
      <>
        <div className="grid grid-rows-2 gap-4 max-w-xl mx-auto ">
          <div className="current-weather-card grid-cols-2 grid">
            <img
              src={photo}
              className="w-full h-full object-cover rounded-l-xl"
              alt=""
            />
            <Cards data1={data1} />
          </div>
          <div className="forecast-card flex overflow-x-auto space-x-4">
            {data2.list.map((item, index) => (
              <Cards key={index} data1={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Forecast;
