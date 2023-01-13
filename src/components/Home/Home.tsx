import React, { useEffect, useState } from "react";
import getData from "../../data/Api";
import Loader from "../Loader/Loader";
import "./Home.css";
import Tracks from "./Tracks/Tracks";

function Home() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    getData(0)
      .then((res) => {
        console.log(res);
        setData1(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getData(21)
      .then((res) => {
        console.log(res);
        setData2(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="title">
        <h1>Top Hits</h1>
        <div className="line" />
      </div>
      {data1.length > 0 ? <Tracks {...data1} /> : <Loader />}
      <div className="title">
        <h1>recommended for you</h1>
        <div className="line" />
      </div>
      {data2.length > 0 ? <Tracks {...data2} /> : <Loader />}
    </div>
  );
}

export default Home;
