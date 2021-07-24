import React, { useState, useEffect } from "react";
import styles from "../api/styles.css";

const Api = () => {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const url =
      "https://api.openaq.org/v1/measurements?country=GB&city=Manchester";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <hr />
      {data.results.map((item, key) => (
        <div className="container">
          <div className="box">
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
