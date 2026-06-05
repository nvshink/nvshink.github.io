"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("./CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false },
);

export function CursorMount() {
  return <CustomCursor />;
}
