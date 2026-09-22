import type Lenis from "lenis";

type LenisScrollToTarget = string | number | HTMLElement;
type LenisScrollToOptions = Parameters<Lenis["scrollTo"]>[1];

export function scrollToTarget(
  target: LenisScrollToTarget,
  options?: LenisScrollToOptions
) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.3, ...options });
    return;
  }

  if (typeof target === "string") {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
