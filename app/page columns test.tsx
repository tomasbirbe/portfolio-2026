import Image from "next/image";
import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

export default function Home() {
  return (
    <div className="flex w-full h-full flex-1 overflow-hidd items-start min-h-0 justify-center bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] bg-size-[12px_12px] relative font-sans">
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        <Card>
          <Image
            src="/wireframes/landing.jpg"
            className="w-fit"
            width={500}
            height={412}
            aria-hidden
            alt=""
          />
        </Card>
        <Card>
          <Image
            src="/wireframes/select.jpg"
            className="w-fit"
            width={280}
            height={61}
            aria-hidden
            alt=""
          />
        </Card>
        <Card>
          <Image
            src="/wireframes/modal.jpg"
            className="w-fit"
            width={381}
            height={160}
            aria-hidden
            alt=""
          />
        </Card>
        <Card>
          <Image
            src="/wireframes/radio-group.jpg"
            className="w-fit"
            width={274}
            height={225}
            aria-hidden
            alt=""
          />
        </Card>
        <Card>
          <Image
            className="w-fit"
            src="/wireframes/buttons.jpg"
            width={157}
            height={197}
            aria-hidden
            alt=""
          />
        </Card>
        <Card>
          <Image
            className="w-fit"
            src="/wireframes/icons.jpg"
            width={268}
            height={53}
            aria-hidden
            alt=""
          />
        </Card>

        <Card>
          <Image
            className="w-fit"
            src="/wireframes/chat.jpg"
            width={268}
            height={243}
            aria-hidden
            alt=""
          />
        </Card>
        <Card>
          <Image
            className="w-fit"
            src="/wireframes/card.jpg"
            width={236}
            height={286}
            aria-hidden
            alt=""
          />
        </Card>
      </div>
    </div>
  );
}
