import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import Image from "next/image";

export function LandingPage() {
  return (
    <div className="grid grid-cols-[min-content_min-content_min-content)] auto-rows-min shrink-0 gap-4 items-end">
      {/* Izquierda */}
      <div className="flex flex-col col-start-1 row-start-3 -row-end-1 justify-start items-start">
        <Image
          src="/wireframes/landing.jpg"
          width={500}
          height={412}
          aria-hidden
          alt=""
          preload
        />
        <h1 className="text-9xl font-sans-display row-start-2 col-start-1">
          <div>Frontend</div>
          <div>Developer</div>
        </h1>
      </div>

      {/* Arriba derecha */}
      <div className="flex col-start-2 row-start-1 gap-4 justify-start items-start">
        <div className="flex flex-col gap-4 justify-start items-start">
          <Image
            src="/wireframes/select.jpg"
            width={280}
            height={61}
            aria-hidden
            alt=""
          />
          <Image
            src="/wireframes/modal.jpg"
            width={381}
            height={160}
            aria-hidden
            alt=""
          />
        </div>
        <Image
          src="/wireframes/radio-group.jpg"
          width={274}
          height={225}
          aria-hidden
          alt=""
        />
      </div>

      {/* Abajo derecha */}
      <div className="flex gap-4 col-start-2 row-start-2 justify-start items-start self-start">
        <Image
          src="/wireframes/buttons.jpg"
          width={157}
          height={197}
          aria-hidden
          alt=""
        />
        <div className="flex flex-col gap-4 justify-start">
          <Image
            src="/wireframes/icons.jpg"
            width={268}
            height={53}
            aria-hidden
            alt=""
          />

          <Image
            src="/wireframes/chat.png"
            width={268}
            height={243}
            aria-hidden
            alt=""
          />
        </div>
        <Image
          src="/wireframes/card.png"
          width={236}
          height={286}
          aria-hidden
          alt=""
        />
      </div>
    </div>
  );
}

function CrossedLines() {
  return (
    <svg className="absolute -z-10 aspect-square h-full overflow-visible">
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="100%"
        className="stroke-neutral-200 stroke-1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="100%"
        y1="0"
        x2="0"
        y2="100%"
        className="stroke-neutral-200 stroke-1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

function AboutMe() {
  return (
    <div className="grid grid-cols-[1fr_1fr] w-full place-items-center h-full">
      <div className="flex flex-col w-[50ch] my-auto pb-12 pl-4 gap-6 text-pretty">
        <h2 className="font-sans-display text-6xl">About me</h2>
        <div className="flex flex-col gap-4">
          <p>
            Hi! My name is Tomas, I’m a JavaScript Developer focused on making
            {" "}<Bold>amazing user experiences</Bold> and
            {" "}<Bold>pixel-perfect</Bold> designs implementations.
          </p>
          <p>
            Mainly building with <Bold>React</Bold> stack and
            {" "}<Bold>Next.JS</Bold>.
          </p>
        </div>
      </div>
      <div className="grid place-items-center h-full w-full border-neutral-200">
        <div className="relative w-fit">
          <svg className="h-full w-full absolute inset-0 overflow-visible">
            <g className="stroke-1 stroke-neutral-200">
              <line vectorEffect="non-scaling-stroke" x1="0%" x2="0%" y1="calc(0% - 20px)" y2="calc(100% + 20px)"></line>
              <line vectorEffect="non-scaling-stroke" x1="100%" x2="100%" y1="calc(0% - 20px)" y2="calc(100% + 20px)"></line>
              <line vectorEffect="non-scaling-stroke" x1="calc(0% - 20px)" x2="calc(100% + 20px)" y1="0%" y2="0%"></line>
              <line vectorEffect="non-scaling-stroke" x1="calc(0% - 20px)" x2="calc(100% + 20px)" y1="100%" y2="100%"></line>
            </g>

            <g className="stroke-1 stroke-neutral-200">
              <line vectorEffect="non-scaling-stroke" x1="0%" x2="100%" y1="0%" y2="100%"></line>
              <line vectorEffect="non-scaling-stroke" x1="100%" x2="0%" y1="0%" y2="100%"></line>
            </g>

          </svg>
          <Image
            src="/profile.jpg"
            alt="Profile pic of me"
            className="overflow-hidden  p-6 w-100 object-cover grayscale object-top-right"
            width={640}
            height={640}
          />
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
}) {
  return (
    <div className="flex sticky top-(--project-gap-top) items-start justify-center w-[70%] max-h-250 h-(--project-height) border border-neutral-400 bg-white">
      <Image
        className="w-1/2 h-full object-cover"
        src={props.imgSrc}
        width={props.imgWidth}
        height={props.imgHeight}
        aria-hidden
        alt=""
      />
      <div className="flex flex-col py-4 justify-between h-full px-4">
        <div className="flex flex-col gap-4 justify-start">
          <h3 className="text-4xl font-sans-display">{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className="flex justify-between w-full">
          <a
            className="hover:scale-110 transition-all"
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github-logo.svg" width={24} height={24} alt="GitHub" />
          </a>
          <a
            className="flex group gap-1 text-sm items-center border border-neutral-800 px-3 py-2 hover:bg-neutral-200 active:bg-neutral-300 transition-colors"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to demo
            <ArrowSquareOutIcon
              size={16}
              className="group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col w-full">
      <div className="h-(--projects-section-height) w-full bg-white sticky top-0 z-10  flex items-center px-4 border-b border-neutral-200">
        <h2 className="font-sans-display text-6xl">Projects</h2>
      </div>

      <div className="flex flex-col w-full items-center gap-80 p-8 min-h-0 justify-start bg-[#ffffff] bg-[linear-gradient(to_right,#c0c0c0_1px,transparent_1px),linear-gradient(to_bottom,#c0c0c0_1px,transparent_1px)] bg-size-[24px_24px] relative font-sans bg-position-[0px_12px]"
      >
        {/* TODO: Check width on bigger viewport */}
        <ProjectCard
          imgSrc="/blommy.webp"
          imgWidth={1200}
          imgHeight={576}
          title="Blommy"
          description="This project is my personal blog where I publish my learning, tools and resources. I could put in practice NextJS and ChakraUI with all its functionalities."
          githubLink="https://github.com/blommy"
          demoLink="https://blommy.com"
        />
        <ProjectCard
          imgSrc="/county.png"
          imgWidth={1364}
          imgHeight={632}
          title="County"
          description="A finance app where you can register your spends, income and savings"
          githubLink="https://github.com/blommy"
          demoLink="https://tb-county.vercel.app/"
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
    <>
      <div className="p-12 w-120 relative ml-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-6xl font-sans-display">Contact</h3>
            <p className="text-pretty">I&apos;m always ready to listen to any proposal. If you think I can fit in any project you have in mind, don&apos;t hesitate to contact me.</p>
          </div>
          <div className="flex gap-4">
            <a className="hover:scale-110 transition-transform" href="#"><EnvelopeSimpleIcon size={32} /></a>
            <a className="hover:scale-110 transition-transform" href="#"><LinkedinLogoIcon size={32} /></a>
            <a className="hover:scale-110 transition-transform" href="#"><GithubLogoIcon size={32} /></a>
          </div>
        </div>
        <svg className="w-full h-full absolute inset-0 pointer-events-none z-10 overflow-visible">
          <g className="stroke-1 stroke-neutral-300">
            <line x1="0%" x2="100%" y1="calc(100% - 24px)" y2="calc(100% - 24px)"></line>
            <line x1="100%" x2="100%" y1="100%" y2="calc(100% - 48px)"></line>
          </g>
          <g className="stroke-1 stroke-neutral-300">
            <line y1="24px" y2="100%" x1="24px" x2="24px"></line>
            <line y1="24px" y2="24px" x1="0" x2="48px"></line>
          </g>
        </svg>
      </div>
      <svg className="absolute right-0 top-0 w-1/2 h-full">
        <line x2="0" x1="100%" y1="0" y2="100%" className="stroke-neutral-200" vectorEffect="non-scaling-stroke" />
        <line x1="25%" y1="75%" x2="50%" y2="100%" className="stroke-neutral-200" vectorEffect="non-scaling-stroke" />
        <line x1="75%" y1="25%" x2="50%" y2="0%" className="stroke-neutral-200" vectorEffect="non-scaling-stroke" />
      </svg>
    </>
  );
}

export default function Page() {
  return (
    // TODO: test to remove overflow
    <div className="overflow-auto h-full">
      <div className="flex w-full border-b border-neutral-200 h-full overflow-hidden items-end min-h-0 justify-start bg-[#ffffff] bg-[radial-gradient(#c0c0c0_2px,transparent_2px)] bg-size-[16px_16px] relative font-sans">
        <LandingPage />
      </div>
      <div className="flex isolate border-b border-neutral-200 w-full h-full min-h-0 relative">
        <AboutMe />
      </div>
      <div className="flex isolate border-b border-neutral-200 w-full min-h-0 relative">
        <Projects />
      </div>
      <div className="flex w-full border-b border-neutral-200 items-center h-full min-h-0 relative">
        <Contact />
      </div>
    </div>
  );
}
