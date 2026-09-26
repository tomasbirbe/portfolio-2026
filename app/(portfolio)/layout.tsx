export default function Layout({ children }: LayoutProps<"/">) {
  return (
      <div className="relative h-screen grid place-items-center">
        <div className="overflow-auto scrollbar-track-background scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800 scrollbar-thin h-[calc(100%-var(--frame-height)*2)] w-[calc(100%-var(--frame-width)*2)]">
          {children}
        </div>
        <div className="z-10 bg-drawing w-px fixed left-(--frame-width) top-0 bottom-0"></div>
        <div className="z-10 bg-drawing w-px fixed right-(--frame-width) top-0 bottom-0"></div>
        <div className="z-10 bg-drawing h-px fixed left-0 right-0 top-(--frame-height)"></div>
        <div className="z-10 bg-drawing h-px fixed left-0 right-0 bottom-(--frame-height)"></div>
      </div>
  );
}
