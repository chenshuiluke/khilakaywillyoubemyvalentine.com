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
import Painting from "../../public/painting.jpg";
import HumbleBeginnings from "../../public/humble_beginnings.jpg";
import Couch from "../../public/painting.jpg";
import LukeBald from "../../public/luke_bald.jpg";
import TunUpFood from "../../public/tun_up_food.jpg";
import Kiss from "../../public/kiss.jpg";
import Thick from "../../public/thick.jpg";
import Backshot from "../../public/backshot.jpg";
import Collage from "../../public/collage.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 md:p-24">
      <h1 className="heading colored">Khilakay...</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Painting}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <h1 className="heading">This was you before we met</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <video loop autoPlay muted>
          <source src={"/this_was_you.mp4"}></source>
        </video>
        {/* <Image
          src={HumbleBeginnings}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        /> */}
      </motion.div>
      <h1 className="heading">This was me before we met</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={LukeBald}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <h1 className="heading">See how me did bald and stress out???</h1>
      <h1 className="heading">But after me start eat your tun up food...</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={TunUpFood}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <h1 className="heading">...and gave you some good good backshots...</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Backshot}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <h1 className="heading">...and got some of ur good loving...</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Kiss}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <h1 className="heading">
        ...mi body get thick and strong... and mi hair grow back...
      </h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Thick}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      <h1 className="heading">
        I&apos;m now the happiest I&apos;ve ever been in my life and it&apos;s
        all because of
      </h1>
      <h1 className="heading colored">You</h1>
      <motion.div
        className="frame"
        initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Collage}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>
      {/* <h1 className="heading">
        would you do me the honor of being my Valentine?
      </h1> */}
      <div>
        {Array.from(Array(50).keys()).map((el) => {
          return <FlyingHeart key={el} />;
        })}
      </div>
    </main>
  );
}
