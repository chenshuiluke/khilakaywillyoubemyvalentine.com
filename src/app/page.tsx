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
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="heading colored">Khilakay,</h1>
      <h1 className="heading">
        would you do me the honor of being my Valentine?
      </h1>
      <div>
        {Array.from(Array(100).keys()).map((el) => {
          return <FlyingHeart key={el} />;
        })}
      </div>
    </main>
  );
}
