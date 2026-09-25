import bgParams from "./background.json";
import React from "react";
import * as motion from "motion/react-client";
import { cn } from "cn";
import { BackgroundElement } from "./_components/background-element";
import { AboutMe } from "./_components/about-me";
import { Projects } from "./_components/projects";
import { Contact } from "./_components/contact";

function CoordinatedFadeIn({
  children,
  baseDelayInMS = 500,
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
        "starting:opacity-0 starting:blur-[0.2em] opacity-100 transition-[opacity,filter] duration-700 ease-out",
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
        <div className="flex flex-col gap-5">
          {/* <div className="starting:bg-transparent bg-background px-6 py-4 absolute starting:opacity-0 opacity-100 transition-[opacity,background] duration-1000"> */}
          <CoordinatedFadeIn order={0}>
          <p className="[text-box:trim-both_cap_alphabetic]">Hello, I&apos;m</p>
          </CoordinatedFadeIn>
          <CoordinatedFadeIn order={1}>
            <p className="text-8xl [text-box:trim-both_cap_alphabetic] font-sans-display text-center text-foreground-display">
              Tomas Birbe
            </p>
          </CoordinatedFadeIn>
          <CoordinatedFadeIn order={2}>
            <p className="text-4xl [text-box:trim-both_cap_alphabetic] font-sans-display text-foreground-muted">
              Frontend Developer
            </p>
          </CoordinatedFadeIn>
        </div>
        <CoordinatedFadeIn order={3} isPositioned={true}>
          <BackgroundElement {...bgParams.chat} />
          <BackgroundElement {...bgParams.toggleAndPopover} />
          <BackgroundElement {...bgParams.card} />
          <BackgroundElement {...bgParams.alert} />
        </CoordinatedFadeIn>
        <CoordinatedFadeIn order={4} isPositioned={true}>
          <BackgroundElement {...bgParams.chips} />
          <BackgroundElement {...bgParams.calendar} />
          <BackgroundElement {...bgParams.contextMenu} />
          <BackgroundElement {...bgParams.buttons} />
          <BackgroundElement {...bgParams.radioButtons} />
        </CoordinatedFadeIn>
        <CoordinatedFadeIn order={5} isPositioned={true}>
          <BackgroundElement {...bgParams.paginateButtons} />
          <BackgroundElement {...bgParams.chart} />
          <BackgroundElement {...bgParams.skeleton} />
          <BackgroundElement {...bgParams.landing} />
        </CoordinatedFadeIn>
        <CoordinatedFadeIn order={6} isPositioned={true}>
          <BackgroundElement {...bgParams.font} />
          <BackgroundElement {...bgParams.icons} />
          <BackgroundElement {...bgParams.select} />
          <BackgroundElement {...bgParams.breadcrumbs} />
        </CoordinatedFadeIn>
      
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
