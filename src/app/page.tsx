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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        className="frame rotated"
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        // whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
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
        //initial={{ transform: `rotate(-10deg) translate(-100%, 0)` }}
        //// whileInView={{ transform: `rotate(0deg) translate(0%, 0)` }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Collage}
          alt={"Painting of me and Khilakay"}
          style={{ width: "auto" }}
        />
      </motion.div>

      <p className="paper">
        Dear Khilakay, I had a good feeling about you from when we first met.
        When we first matched on Tinder, I could tell that you were a woman of
        remarkable intelligence and beauty. I thoroughly enjoyed talking to you
        in the week leading up to our first date. When I first lay my eyes on
        you, I thought you were adorable short and I had a lot of fun hanging
        out with you. I remember you took me to a great jerk chicken spot and we
        had a great conversation in the car afterwards. Ever since then, I have
        been obsessed with you even if I sometimes struggle with expressing it
        due to how I am. We've had our ups and downs and at first it was tough
        to adjust to certain things you wanted me to do. But I could always tell
        that most of the things you want me to do had my best interest at heart.
        I've grown a lot as a man since I first met you and that was only a few
        months ago. I can only imagine how much I'll grow while spending the
        rest of my life with you.
      </p>
      <p className="paper">
        So Khilakay, will you do me the honor of being my Valentine?
      </p>
      <div>
        {Array.from(Array(50).keys()).map((el) => {
          return <FlyingHeart key={el} />;
        })}
      </div>
    </main>
  );
}
