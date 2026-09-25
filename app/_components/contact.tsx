import * as motion from 'motion/react-client'
import { drawLine, reveal } from './animationts';
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react/dist/ssr';

export function Contact() {
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