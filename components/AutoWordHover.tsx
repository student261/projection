"use client";

import { useEffect } from "react";

export default function AutoWordHover() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const wrapWords = () => {
      const mainContainer = document.querySelector("main") || document.body;
      const elements = mainContainer.querySelectorAll<HTMLElement>(
        "h1, h2, h3, h4, p:not(footer p):not(nav p)"
      );

      elements.forEach((el) => {
        if (
          el.dataset.wordWrapped === "true" ||
          el.closest("nav, footer, button, a, svg, form")
        ) {
          return;
        }

        const textContent = el.textContent;
        if (!textContent || !textContent.trim()) return;

        // Skip if element has complex nested JSX children (like buttons/icons)
        if (el.children.length > 0 && Array.from(el.children).some(child => !child.classList.contains("hover-word"))) {
          return;
        }

        const words = textContent.split(/(\s+)/);
        const fragment = document.createDocumentFragment();

        words.forEach((word) => {
          if (word.trim()) {
            const span = document.createElement("span");
            span.className = "hover-word";
            span.textContent = word;
            fragment.appendChild(span);
          } else {
            fragment.appendChild(document.createTextNode(word));
          }
        });

        el.innerHTML = "";
        el.appendChild(fragment);
        el.dataset.wordWrapped = "true";
      });
    };

    // Run once after initial layout paint
    const timer = setTimeout(wrapWords, 200);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
