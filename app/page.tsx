import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import bgParams from "./background.json";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { MotionNodeOptions } from "motion/react";
import { cn } from "cn";

function getBackgroundPosition(
  x: number,
  y: number,
  inlineCenter: number,
  blockCenter: number,
) {
  let translateX = Math.abs(inlineCenter - x);
  let translateY = Math.abs(blockCenter - y);

  if (y < blockCenter) {
    translateY *= -1;
  }

  if (x < inlineCenter) {
    translateX *= -1;
  }
  return { translateX, translateY };
}

export function BackgroundElement(props: {
  width: number;
  height: number;
  x: number;
  y: number;
}) {
  const position = getBackgroundPosition(props.x, props.y, 1920 / 2, 1080 / 2);
  return (
    <div
      className="absolute inset-1/2"
      style={{
        width: props.width,
        height: props.height,
        translate: `${position.translateX}px ${position.translateY}px`,
      }}
    >
      <Image
        src="/background.png"
        unoptimized={true}
        loading="eager"
        style={{
          objectPosition: `-${props.x}px -${props.y}px`,
        }}
        className="dark:hidden object-none w-full h-full"
        width={props.width}
        height={props.height}
        alt=""
      />
      <Image
        src="/background-dark.png"
        unoptimized={true}
        loading="eager"
        style={{
          objectPosition: `-${props.x}px -${props.y}px`,
        }}
        className="dark:block hidden object-none w-full h-full"
        width={props.width}
        height={props.height}
        alt=""
      />
    </div>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

const reveal: MotionNodeOptions = {
  initial: { opacity: 0, translateY: "10px", filter: "blur(4px)" },
  whileInView: {
    opacity: 1,
    filter: "none",
    translateY: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeOut" },
  },
  viewport: { once: true },
};

const drawLine: MotionNodeOptions = {
  initial: { pathLength: 0, pathOffset: 0.5 },
  viewport: { once: true },
  whileInView: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 1 },
  },
};
function AboutMe() {
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

function ProjectCard(props: {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  note?: React.ReactNode;
}) {
  return (
    <div className="flex sticky top-(--project-gap-top) items-start justify-center w-[70%] max-h-250 h-(--project-height) border dark:border-white bg-background">
      <Image
        className="w-1/2 h-full object-cover"
        src={props.imgSrc}
        width={props.imgWidth}
        height={props.imgHeight}
        aria-hidden
        alt=""
      />
      <div className="flex flex-col w-1/2 py-4 justify-between h-full px-4">
        <div className="flex flex-col gap-4 justify-start">
          <h3 className="text-4xl font-sans-display">{props.title}</h3>
          <p>{props.description}</p>
        </div>
        {props.note}
        <div className="flex justify-between w-full">
          <a
            className="hover:scale-110  transition-all"
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github-logo.svg" width={24} height={24} alt="GitHub" />
          </a>
          <a
            className="flex gap-1 text-sm items-center dark:text-foreground-display dark:border-white border border-neutral-800 hover:dark:bg-neutral-900 px-3 py-2 hover:bg-neutral-200 active:bg-neutral-300 transition-colors duration-200"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to demo
            <ArrowSquareOutIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col w-full">
      <div className="h-(--projects-section-height) w-full bg-background sticky top-0 z-10  flex items-center px-4 border-b border-drawing">
        <h2 className="font-sans-display text-6xl">Projects</h2>
      </div>

      <div className="flex flex-col w-full h-full items-center gap-80 p-8 min-h-0 justify-start bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)] bg-size-[24px_24px] relative font-sans bg-position-[0px_12px]">
        <ProjectCard
          imgSrc="/blommy.webp"
          imgWidth={1200}
          imgHeight={576}
          title="Blommy"
          description="This project is my personal blog where I publish my learning, tools and resources."
          githubLink="https://github.com/blommy"
          demoLink="https://blommy.com"
        />
        <ProjectCard
          imgSrc="/county.png"
          imgWidth={1364}
          imgHeight={632}
          title="County"
          description="A finance app where you can register your spends, incomes and savings"
          githubLink="https://github.com/blommy"
          demoLink="https://tb-county.vercel.app/"
          note={
            <p className="italic text-sm">
              You can try it with <Bold>testdemo@gmail.com</Bold> as username
              and <Bold>testdemo</Bold> as password
            </p>
          }
        />
        <ProjectCard
          imgSrc="/meli-challenge.png"
          imgWidth={1364}
          imgHeight={632}
          title="MercadoLibre clone"
          description="A pixel-perfect clone of MercadoLibre's page product with the product data, comments, recommendations and more!"
          githubLink="https://github.com/blommy"
          demoLink="https://meli-challenge-git-main-tomasbirbe.vercel.app/"
        />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="relative h-full flex items-center">
      <div className="p-12 w-120 relative ml-8">
        <div className="flex flex-col gap-4">
          <motion.div {...reveal} className="flex flex-col gap-2">
            <h3 className="text-6xl font-sans-display">Contact</h3>
            <p className="text-pretty">
              I&apos;m always ready to listen to any proposal. If you think I
              can fit in any project you have in mind, don&apos;t hesitate to
              contact me.
            </p>
          </motion.div>
          <div className="flex gap-4">
            <a
              className="hover:scale-110 transition-transform"
              href="mailto:tomas.birbe@gmail.com"
            >
              <EnvelopeSimpleIcon size={32} />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="https://www.linkedin.com/in/tomas-birbe/"
            >
              <LinkedinLogoIcon size={32} />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="https://github.com/tomasbirbe"
            >
              <GithubLogoIcon size={32} />
            </a>
          </div>
        </div>
        <svg className="w-full h-full absolute inset-0 pointer-events-none z-10 overflow-visible">
          <g className="stroke-1 stroke-drawing">
            <motion.line
              {...drawLine}
              x1="0%"
              x2="100%"
              y1="calc(100% - 24px)"
              y2="calc(100% - 24px)"
            ></motion.line>
            <motion.line
              {...drawLine}
              x1="100%"
              x2="100%"
              y1="100%"
              y2="calc(100% - 48px)"
            ></motion.line>
          </g>
          <g className="stroke-1 stroke-drawing">
            <motion.line
              {...drawLine}
              y1="24px"
              y2="100%"
              x1="24px"
              x2="24px"
            ></motion.line>
            <motion.line
              {...drawLine}
              y1="24px"
              y2="24px"
              x1="0"
              x2="48px"
            ></motion.line>
          </g>
        </svg>
      </div>
      <svg className="absolute right-0 top-0 w-1/2 h-full">
        <motion.line
          {...drawLine}
          x2="0"
          x1="100%"
          y1="0"
          y2="100%"
          className="stroke-drawing"
          vectorEffect="non-scaling-stroke"
        />
        <motion.line
          {...drawLine}
          x1="25%"
          y1="75%"
          x2="50%"
          y2="100%"
          className="stroke-drawing"
          vectorEffect="non-scaling-stroke"
        />
        <motion.line
          {...drawLine}
          x1="75%"
          y1="25%"
          x2="50%"
          y2="0%"
          className="stroke-drawing"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function CoordinatedFadeIn({
  children,
  baseDelayInMS = 300,
  order,
  isPositioned = false,
}: {
  children: React.ReactNode;
  order: number;
  baseDelayInMS?: number;
  isPositioned?: boolean;
}) {
  return (
    <div
      style={{ transitionDelay: `${baseDelayInMS * order}ms` }}
      className={cn(
        "starting:opacity-0 starting:blur-md opacity-100 transition-[opacity,filter] duration-1200",
        isPositioned && "absolute inset-0 pointer-events-none",
      )}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <motion.div className="h-full grid place-items-center bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] bg-size-[16px_16px] border-b border-drawing relative overflow-hidden">
        <CoordinatedFadeIn order={2} isPositioned={true}>
          <BackgroundElement {...bgParams.chat} />
          <BackgroundElement {...bgParams.toggleAndPopover} />
          <BackgroundElement {...bgParams.card} />
          <BackgroundElement {...bgParams.alert} />
        </CoordinatedFadeIn>
        <CoordinatedFadeIn order={3} isPositioned={true}>
          <BackgroundElement {...bgParams.chips} />
          <BackgroundElement {...bgParams.calendar} />
          <BackgroundElement {...bgParams.contextMenu} />
          <BackgroundElement {...bgParams.buttons} />
          <BackgroundElement {...bgParams.radioButtons} />
        </CoordinatedFadeIn>
        <CoordinatedFadeIn order={4} isPositioned={true}>
          <BackgroundElement {...bgParams.paginateButtons} />
          <BackgroundElement {...bgParams.chart} />
          <BackgroundElement {...bgParams.skeleton} />
          <BackgroundElement {...bgParams.landing} />
        </CoordinatedFadeIn>
        <CoordinatedFadeIn order={5} isPositioned={true}>
          <BackgroundElement {...bgParams.font} />
          <BackgroundElement {...bgParams.icons} />
          <BackgroundElement {...bgParams.select} />
          <BackgroundElement {...bgParams.breadcrumbs} />
        </CoordinatedFadeIn>
        <div className="px-6 py-4 absolute starting:opacity-0 opacity-100 transition-[opacity,background] duration-1200">
          {/* <div className="starting:bg-transparent bg-background px-6 py-4 absolute starting:opacity-0 opacity-100 transition-[opacity,background] duration-1000"> */}
          <CoordinatedFadeIn order={0}>
            <p className="text-8xl font-sans-display text-center text-foreground-display">
              Tomas Birbe
            </p>
          </CoordinatedFadeIn>
          <CoordinatedFadeIn order={1}>
            <p className="text-4xl font-sans-display text-center text-foreground-muted">
              Frontend Developer
            </p>
          </CoordinatedFadeIn>
        </div>
      </motion.div>
      <div className="h-full border-b border-drawing">
        <AboutMe />
      </div>
      <div>
        <Projects />
      </div>
      <div className="h-full">
        <Contact />
      </div>
    </>
  );
}
