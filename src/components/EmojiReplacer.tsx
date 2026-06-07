"use client";

import { useEffect } from "react";
import joypixels from "emoji-toolkit";

const EMOJI_REGEX = /[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/u;

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "TEXTAREA",
  "INPUT",
  "CODE",
  "PRE",
  "KBD",
  "SAMP",
]);

export function EmojiReplacer() {
  useEffect(() => {
    joypixels.emojiSize = "32";

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    let current: Node | null = walker.nextNode();
    while (current) {
      const node = current as Text;
      const parent = node.parentElement;
      if (
        parent &&
        !SKIP_TAGS.has(parent.tagName) &&
        !parent.closest(".joypixels") &&
        node.nodeValue &&
        EMOJI_REGEX.test(node.nodeValue)
      ) {
        textNodes.push(node);
      }
      current = walker.nextNode();
    }

    for (const textNode of textNodes) {
      const original = textNode.nodeValue ?? "";
      const converted = joypixels.toImage(original);
      if (converted === original) continue;
      const template = document.createElement("template");
      template.innerHTML = converted;
      const parent = textNode.parentNode;
      if (!parent) continue;
      parent.replaceChild(template.content, textNode);
    }
  }, []);

  return null;
}
