"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
// import { useSelector } from "react-redux";

const Home = () => {
  // const data = useSelector((state) => state);
  // console.log("global data", data);
  const fetchImage = async () => {
    const response = await axios("/api/nasa");
    console.log(response);
  };
  return (
    <div className="container h-screen  flex justify-center items-center">
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        back
      </Link>
    </div>
  );
};

export default Home;
