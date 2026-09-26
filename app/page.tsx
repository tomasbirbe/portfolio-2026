import bgParams from "./background.json";
import React from "react";
import { BackgroundElement } from "./_components/background-element";
import { AboutMe } from "./_components/about-me";
import { Projects } from "./_components/projects";
import { Contact } from "./_components/contact";

export default function Page() {
  return (
    <>
      <div className="h-full grid place-items-center bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] bg-size-[16px_16px] border-b border-drawing relative overflow-hidden">
        <div className="flex flex-col gap-5">
          <p className="[text-box:trim-both_cap_alphabetic] reveal">Hello, I&apos;m</p>
            <p className="text-8xl reveal [text-box:trim-both_cap_alphabetic] font-sans-display text-center text-foreground-display">
              Tomas Birbe
            </p>
            <p className="text-4xl [text-box:trim-both_cap_alphabetic] reveal font-sans-display text-foreground-muted">
              Frontend Developer
            </p>
        </div>
        <div className="absolute reveal" data-order={3}>
          <BackgroundElement {...bgParams.chat} />
          <BackgroundElement {...bgParams.toggleAndPopover} />
          <BackgroundElement {...bgParams.card} />
          <BackgroundElement {...bgParams.alert} />
        </div>
        <div className="absolute inset-0 pointer-events-none reveal" data-order={4}>
          <BackgroundElement {...bgParams.chips} />
          <BackgroundElement {...bgParams.calendar} />
          <BackgroundElement {...bgParams.contextMenu} />
          <BackgroundElement {...bgParams.buttons} />
          <BackgroundElement {...bgParams.radioButtons} />
        </div>
        <div className="absolute inset-0 pointer-events-none reveal" data-order={5}>
          <BackgroundElement {...bgParams.paginateButtons} />
          <BackgroundElement {...bgParams.chart} />
          <BackgroundElement {...bgParams.skeleton} />
          <BackgroundElement {...bgParams.landing} />
        </div>
        <div className="absolute inset-0 pointer-events-none reveal" data-order={6}>
          <BackgroundElement {...bgParams.font} />
          <BackgroundElement {...bgParams.icons} />
          <BackgroundElement {...bgParams.select} />
          <BackgroundElement {...bgParams.breadcrumbs} />
        </div>
      </div>
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
