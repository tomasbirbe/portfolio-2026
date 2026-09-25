import Image from "next/image";


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
