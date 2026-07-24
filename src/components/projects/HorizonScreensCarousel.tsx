"use client";

import { useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";

const screens = [
  "EN-Phone-Bubble-1.jpg",
  "EN-Phone-Bubble-2.jpg",
  "EN-Phone-Compass-2.jpg",
  "EN-Phone-Tilt-1.jpg",
  "EN-Phone-Tilt-2.jpg",
];

export function HorizonScreensCarousel() {
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);
  const move = (step: number) =>
    setActive((current) => (current + step + screens.length) % screens.length);

  const endDrag = (endX: number) => {
    if (dragStart.current === null) return;
    const distance = endX - dragStart.current;
    if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
    dragStart.current = null;
  };

  return (
    <div aria-label="Horizon app screenshots" aria-roledescription="carousel" role="region">
      <div
        className="relative flex cursor-grab items-center justify-center touch-pan-y overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] active:cursor-grabbing"
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => endDrag(event.clientX)}
        onPointerCancel={() => {
          dragStart.current = null;
        }}
      >
        {screens.map((screen, index) => (
          <img
            key={screen}
            src={assetPath(`/images/projects/horizon/${screen}`)}
            alt={`Horizon app screen ${index + 1} of ${screens.length}`}
            className={`mx-auto block h-auto max-h-[70vh] w-auto max-w-full object-contain object-center transition-opacity duration-200 sm:max-h-[30rem] ${index === active ? "visible" : "hidden"}`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => move(-1)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--foreground)]/15 bg-[color:var(--surface)] text-xl leading-none text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
        >
          &#8249;
        </button>
        <div className="flex min-w-0 justify-center gap-2" aria-label="Choose screenshot">
          {screens.map((screen, index) => (
            <button
              key={screen}
              type="button"
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] ${index === active ? "w-7 bg-[color:var(--accent)]" : "w-2 bg-[color:var(--border)] hover:bg-[color:var(--accent)]/60"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => move(1)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--foreground)]/15 bg-[color:var(--surface)] text-xl leading-none text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
