import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Bold } from "./bold";

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

export function Projects() {
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