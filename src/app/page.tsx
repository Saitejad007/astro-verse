"use client";
import { apodData } from "@/global-redux/Slices/apod";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "@/global-redux/Slices/apod";
import { useSelector } from "react-redux";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "@dotlottie/player-component";
import LottiePlayer from "@/components/LottiePlayer";
import Button from "@/components/Button";

export default function Home() {
  const data = useSelector(apodData);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios("/api/nasa");
    dispatch(updateData({ ...response.data.response }));
  };

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center container bg-spaceblack w-screen">
      <Navbar />
      <div className="m-2">
        <LottiePlayer
          file={"/lottie-files/solar-system.lottie"}
          height="300px"
          width="300px"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-8xl font-bold text-white">
          Welcome to <span className="astro-style font-extrabold">Astro</span>
          <span className="verse-style font-extrabold">Verse!</span>
        </h1>
        <p className="text-white text-xl mt-10 text-center w-9/12">
          Embark on a captivating journey through the vast expanse of the
          universe with AstroVerse. Explore the wonders of outer space, immerse
          yourself in stunning celestial imagery, and unravel the mysteries of
          distant galaxies.
        </p>
        <div className="m-8">
          <Button text="Explore" link="/explore" />
        </div>
      </div>
    </main>
  );
}
