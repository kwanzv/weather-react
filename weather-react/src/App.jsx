import { useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [city, setCity] = useState(null);
  const [photo, setPhoto] = useState(null);

  // All requests made with the client will be authenticated

  const fetchData = async () => {
    try {
      const response1 = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=current,minutely,hourly,alerts&appid=${
          import.meta.env.VITE_REACT_APP_KEY
        }&units=metric`
      );

      const response2 = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_REACT_APP_KEY
        }&units=metric`
      );
      setPhoto(`http://source.unsplash.com/1600x900/?${city}`);

      const Data1 = await response1.json();
      const Data2 = await response2.json();
      setData1(Data1);
      setData2(Data2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="max-w-2xl-screen md:max-w-2xl mx-auto p-6 ">
        <div className=" mx-4 md:mx-12">
          <h1 className="text-4xl font-semibold text-center">
            Weather in {city}
          </h1>
          <div className="form-wrapper py-2 md:py-6 flex justify-center items-center">
            <form action="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                Enter your city
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </form>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white ml-4 md:ml-8 font-bold rounded px-4 py-2 "
              type="submit"
              onClick={() => fetchData()}
            >
              Search
            </button>
          </div>
        </div>
        <Forecast photo={photo} data1={data1} data2={data2} />
      </div>
    </>
  );
}

export default App;
