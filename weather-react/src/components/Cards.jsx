import React from "react";

function Cards({ data1 }) {
  function getIcon() {
    return `http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`;
  }

  return (
    <div className="card bg-slate-300 p-4 text-center shadow-lg flex flex-col gap-2 rounded-r-xl justify-center ">
      {data1.dt && (
        <p className="text-sm font-bold">
          {new Date(data1.dt * 1000).toLocaleString()}
        </p>
      )}
      <p>
        <span className="font-bold">Temperature: </span>
        {data1.main.temp}
      </p>
      <p>
        <span className="font-bold">Feels like: </span>
        {data1.main.feels_like}
      </p>
      <p>
        <span className="font-bold">Humidity: </span>
        {data1.main.humidity}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {data1.weather[0].description}
        <img src={getIcon()} alt="" className="w-10 mx-auto" />
      </p>
      <p>
        <span className="font-bold">Pressure: </span> {data1.main.pressure}
      </p>
    </div>
  );
}

export default Cards;
