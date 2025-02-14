"use client";
import Image from "next/image";
import {
  MotionValue,
  frame,
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useTime,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FlyingHeart from "./components/flying_heart";
import Collage from "../../public/happy_valentines.jpeg";
import One from "../../public/1.jpeg";
import Two from "../../public/2.jpeg";
import Three from "../../public/3.jpeg";
import Four from "../../public/4.jpeg";
// import Five from "../../public/5.jpeg";
// import Six from "../../public/6.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 md:p-24">
      <h1 className="heading colored">❤️❤️❤️Alyssa...❤️❤️❤️</h1>
      <motion.div
        className="frame"
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Collage}
          alt={"Collage from Shayn"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <motion.div
        className="frame"
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image src={One} alt={"One"} style={{ width: "auto" }} />
      </motion.div>
      <motion.div
        className="frame"
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image src={Two} alt={"Two"} style={{ width: "auto" }} />
      </motion.div>

      <motion.div
        className="frame"
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image src={Three} alt={"Three"} style={{ width: "auto" }} />
      </motion.div>

      <motion.div
        className="frame"
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image src={Four} alt={"Four"} style={{ width: "auto" }} />
      </motion.div>
      <p className="paper">
        I've made a lot of mistakes but swiping right on you on Bumble wasn't one of them.
      </p>
      <p className="paper">
        I felt something I haven&apos;t in a long time when I saw you and getting
        to know you helped to heal the wounds I didn&apos;t know I had.
      </p>
      <p className="paper">
        I look forward to every message, voice note and picture...🥰
      </p>
      <p className="paper">
        I wish I could jump through the phone screen when we video call. So close
        but yet so far...😭
      </p>
      <p className="paper">
        It has only been two dates but I see 100 times that in the future 👰‍♀️
      </p>
      <p className="paper">
        So Alyssa, will you give me the honor of being your 💝 Valentine 💋?
      </p>
      <div>
        {Array.from(Array(60).keys()).map((el) => {
          return <FlyingHeart key={el} />;
        })}
      </div>
    </main>
  );
}
