"use client";

import { useEffect, useRef, useState } from "react";
import {
  DefaultCursor,
  GrabCursor,
  LinkCursor,
  TextCursor,
  TextLoadingCursor,
} from "./cursor-svgs";
import { findClosestState, type CursorState } from "./cursor-state";

interface CursorBounds {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
}

const BOUNDS: Record<CursorState, CursorBounds> = {
  default: { width: 28, height: 30, offsetX: 0, offsetY: 0 },
  link: { width: 40, height: 40, offsetX: -6, offsetY: -6 },
  grab: { width: 38, height: 34, offsetX: 4, offsetY: 0 },
  text: { width: 18, height: 32, offsetX: -9, offsetY: -16 },
  "text-loading": { width: 22, height: 36, offsetX: -11, offsetY: -18 },
};

const LEAVE_DELAY_MS = 120;
const PRESS_HIDE_DELAY_MS = 60;

export function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<number | null>(null);
  const lastStateRef = useRef<CursorState>("default");
  const isVisibleRef = useRef(false);

  const [state, setState] = useState<CursorState>("default");
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window;
    if (isTouch) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const hideNow = () => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      if (isVisibleRef.current) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    const showNow = () => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const showAfterDelay = (delay: number) => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        isVisibleRef.current = true;
        setIsVisible(true);
        hideTimeoutRef.current = null;
      }, delay);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const el = wrapperRef.current;
      if (el) {
        el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handlePointerOver = (event: PointerEvent) => {
      const next = findClosestState(event.target);
      if (next.state !== lastStateRef.current) {
        lastStateRef.current = next.state;
        setState(next.state);
      }
    };

    const handlePointerDown = () => {
      hideNow();
    };

    const handlePointerUp = () => {
      showAfterDelay(PRESS_HIDE_DELAY_MS);
    };

    const handleContextMenu = () => {
      hideNow();
    };

    const handleSelectionChange = () => {
      const selection = document.getSelection();
      const hasSelection =
        selection !== null && selection.toString().length > 0;
      if (hasSelection) {
        hideNow();
      }
    };

    const handleDragStart = () => {
      hideNow();
    };

    const handleDragEnd = () => {
      showNow();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget !== null) return;
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        isVisibleRef.current = false;
        setIsVisible(false);
        hideTimeoutRef.current = null;
      }, LEAVE_DELAY_MS);
    };

    const handleWindowBlur = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const handleWindowFocus = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("contextmenu", handleContextMenu, { passive: true });
    document.addEventListener("selectionchange", handleSelectionChange, { passive: true });
    document.addEventListener("dragstart", handleDragStart, { passive: true });
    document.addEventListener("dragend", handleDragEnd, { passive: true });
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      if (hideTimeoutRef.current !== null) window.clearTimeout(hideTimeoutRef.current);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [isReady]);

  if (!isReady) return null;

  const bounds = BOUNDS[state];

  return (
    <div
      ref={wrapperRef}
      className="custom-cursor"
      data-cursor-state={state}
      data-cursor-visible={isVisible ? "true" : "false"}
      style={{
        width: bounds.width,
        height: bounds.height,
        marginLeft: bounds.offsetX,
        marginTop: bounds.offsetY,
      }}
      aria-hidden="true"
    >
      <div className="custom-cursor__inner" data-cursor-state={state}>
        {state === "default" && <DefaultCursor />}
        {state === "link" && <LinkCursor />}
        {state === "grab" && <GrabCursor />}
        {state === "text" && <TextCursor />}
        {state === "text-loading" && <TextLoadingCursor spin />}
      </div>
    </div>
  );
}
