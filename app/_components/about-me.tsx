import * as motion from "motion/react-client";
import { drawLine, reveal } from "./animationts";
import { Bold } from "./bold";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="grid grid-cols-[1fr_1fr] w-full place-items-center h-full">
      <motion.div
        {...reveal}
        className="flex flex-col w-[50ch] my-auto pb-12 pl-4 gap-6 text-pretty"
      >
        <h2 className="font-sans-display text-6xl">About me</h2>
        <div className="flex flex-col gap-4">
          <p>
            Hi! My name is Tomas, I’m a JavaScript Developer focused on making{" "}
            <Bold>amazing user experiences</Bold> and <Bold>pixel-perfect</Bold>{" "}
            designs implementations.
          </p>
          <p>
            Mainly building with <Bold>React</Bold> stack and{" "}
            <Bold>Next.JS</Bold>.
          </p>
        </div>
        {/* </Reveal> */}
      </motion.div>
      <div className="grid place-items-center h-full w-full border-drawing">
        <div className="relative p-4 w-fit">
          <svg className="h-full -z-10 w-full absolute inset-0 overflow-visible">
            <motion.g className="stroke-drawing">
              <motion.line
                {...drawLine}
                vectorEffect="non-scaling-stroke "
                x1="0%"
                x2="0%"
                y1="calc(0% - 20px)"
                y2="calc(100% + 20px)"
              ></motion.line>
              <motion.line
                {...drawLine}
                vectorEffect="non-scaling-stroke"
                x1="100%"
                x2="100%"
                y1="calc(0% - 20px)"
                y2="calc(100% + 20px)"
              ></motion.line>
              <motion.line
                {...drawLine}
                vectorEffect="non-scaling-stroke"
                x1="calc(0% - 20px)"
                x2="calc(100% + 20px)"
                y1="0%"
                y2="0%"
              ></motion.line>
              <motion.line
                {...drawLine}
                vectorEffect="non-scaling-stroke"
                x1="calc(0% - 20px)"
                x2="calc(100% + 20px)"
                y1="100%"
                y2="100%"
              ></motion.line>
            </motion.g>

            <g className="stroke-1 stroke-drawing">
              <motion.line
                {...drawLine}
                vectorEffect="non-scaling-stroke"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="100%"
              ></motion.line>
              <motion.line
                {...drawLine}
                vectorEffect="non-scaling-stroke"
                x1="100%"
                x2="0%"
                y1="0%"
                y2="100%"
              ></motion.line>
            </g>
          </svg>
          <motion.div
            {...reveal}
            className="bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-800 p-4"
          >
            <Image
              src="/profile.jpg"
              alt="Profile pic of me"
              className="overflow-hidden w-80 object-cover grayscale object-top-right"
              width={640}
              height={640}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}