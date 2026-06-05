export const CURSOR_STATES = [
  "default",
  "link",
  "grab",
  "text",
  "text-loading",
] as const;

export type CursorState = (typeof CURSOR_STATES)[number];

const STATE_PRIORITY: Record<CursorState, number> = {
  "text-loading": 4,
  grab: 3,
  text: 2,
  link: 1,
  default: 0,
};

const TEXT_SELECTOR =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="image"]):not([type="range"]):not([type="color"]):not([type="file"]), textarea, select, [contenteditable="" i], [contenteditable="true" i]';

const LINK_SELECTOR =
  'a[href], button, [role="button" i], [role="link" i], [role="menuitem" i], [role="tab" i], [role="checkbox" i], [role="radio" i], [role="switch" i], [role="option" i], summary';

const GRAB_SELECTOR = '[data-cursor="grab"], [draggable="true" i]';

const LOADING_SELECTOR = '[data-cursor="loading"], [aria-busy="true" i], progress[value]';

export interface CursorContext {
  state: CursorState;
  isInteractive: boolean;
}

const matches = (element: Element | null, selector: string): boolean =>
  element !== null && element.matches(selector);

const findClosestState = (target: EventTarget | null): CursorContext => {
  if (!(target instanceof Element)) {
    return { state: "default", isInteractive: false };
  }

  const candidates: CursorState[] = [];

  if (matches(target, LOADING_SELECTOR) || target.closest(LOADING_SELECTOR)) {
    candidates.push("text-loading");
  }
  if (matches(target, GRAB_SELECTOR) || target.closest(GRAB_SELECTOR)) {
    candidates.push("grab");
  }
  if (matches(target, TEXT_SELECTOR) || target.closest(TEXT_SELECTOR)) {
    candidates.push("text");
  }
  if (matches(target, LINK_SELECTOR) || target.closest(LINK_SELECTOR)) {
    candidates.push("link");
  }

  if (candidates.length === 0) {
    return { state: "default", isInteractive: false };
  }

  const winner = candidates.reduce((best, current) =>
    STATE_PRIORITY[current] > STATE_PRIORITY[best] ? current : best,
  );

  return { state: winner, isInteractive: true };
};

export { findClosestState };
