import { motion, useAnimate, useInView, useTime } from "framer-motion";
import { useRef, useEffect } from "react";

export default function FlyingHeart() {
  const [scope, animate] = useAnimate();
  const [pathScope, pathAnimate] = useAnimate();
  let vh = 10;
  if (typeof window != "undefined") {
    vh = Math.max(
      window?.document?.documentElement?.clientHeight || 0,
      window?.innerHeight || 0
    );
  }

  useEffect(() => {
    if (scope.current) {
      debugger;
      const pinks = [
        "#ffd1dc",
        "#ffb7c5",
        "#F83B6A",
        "#ff77ff",
        "#51014A",
        "#FEE7FF",
      ];
      const pinkIndex =
        Math.floor(Math.random() * (pinks.length - 1 - 0 + 1)) + 0;
      const pink = pinks[pinkIndex];
      console.log("@@@ pink", pink);
      pathAnimate(
        pathScope.current,
        { fill: pink },
        {
          repeat: Infinity,
          duration: Math.random() * (5 - 3 + 1) + 3,
        }
      );
      animate(
        scope.current,
        { bottom: vh },
        {
          repeat: Infinity,
          duration: Math.random() * (5 - 1 + 1) + 1,
        }
      );
    }
  }, []);
  return (
    <motion.div
      ref={scope}
      whileTap={{ scale: 3 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "absolute",
        bottom: 0,
        left:
          Math.random() *
          (typeof window != "undefined" ? window.innerWidth : 2000),
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="32"
        height="32"
      >
        <path
          ref={pathScope}
          fill={"#d73a49"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.655 14.9159C7.65523 14.9161 7.65543 14.9162 8 14.25C8.34457 14.9162 8.34477 14.9161 8.34501 14.9159C8.12889 15.0277 7.87111 15.0277 7.655 14.9159ZM7.655 14.9159L8 14.25L8.34501 14.9159L8.34731 14.9147L8.35269 14.9119L8.37117 14.9022C8.38687 14.8939 8.40926 14.882 8.4379 14.8665C8.49516 14.8356 8.57746 14.7904 8.6812 14.7317C8.8886 14.6142 9.18229 14.442 9.53358 14.2199C10.2346 13.7767 11.1728 13.13 12.1147 12.3181C13.9554 10.7312 16 8.35031 16 5.5C16 2.83579 13.9142 1 11.75 1C10.2026 1 8.84711 1.80151 8 3.01995C7.15289 1.80151 5.79736 1 4.25 1C2.08579 1 0 2.83579 0 5.5C0 8.35031 2.04459 10.7312 3.8853 12.3181C4.82717 13.13 5.76538 13.7767 6.46642 14.2199C6.81771 14.442 7.1114 14.6142 7.3188 14.7317C7.42254 14.7904 7.50484 14.8356 7.5621 14.8665C7.59074 14.882 7.61313 14.8939 7.62883 14.9022L7.64731 14.9119L7.65269 14.9147L7.655 14.9159Z"
        />
      </svg>
    </motion.div>
  );
}
