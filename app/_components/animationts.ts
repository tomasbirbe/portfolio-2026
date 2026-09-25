import { MotionNodeOptions } from "motion";

export const reveal: MotionNodeOptions = {
  initial: { opacity: 0, translateY: "10px", filter: "blur(4px)" },
  whileInView: {
    opacity: 1,
    filter: "none",
    translateY: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeOut" },
  },
  viewport: { once: true },
};


export const drawLine: MotionNodeOptions = {
  initial: { pathLength: 0, pathOffset: 0.5 },
  viewport: { once: true },
  whileInView: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 1 },
  },
};