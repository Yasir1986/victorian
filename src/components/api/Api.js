import React, { useState, useEffect } from "react";
import LoaderCli from "../loader/Loader";
import "../api/styles.css";

const Api = () => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url =
      "https://api.openaq.org/v1/measurements?country=GB&city=Manchester";
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <hr />
      {loading && <LoaderCli />}
      {data.results.map((item, index) => (
        <div className="container">
          <div className="box" key={index}>
            <p>Location: {item.location}</p>
            <p>Parameter: {item.parameter}</p>
            <p>Value: {item.value}</p>
            <p>Date: {item.date.utc}</p>
            <p>Latitude: {item.coordinates.latitude}</p>
            <p>longitude: {item.coordinates.longitude}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default Api;
