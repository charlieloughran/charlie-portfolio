// =============================================================
// Scroll reveal
// Adds `.is-revealed` to any [data-reveal] element once it enters
// the viewport, triggering the fade-up animation defined in
// _animations.scss. Pairs with the `html.js` class set by the
// inline theme-bootstrap script in Layout.astro — if JS never
// runs, [data-reveal] elements remain visible by default.
// =============================================================

const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (targets.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  targets.forEach((target) => observer.observe(target));
} else {
  // No IntersectionObserver support — reveal everything immediately.
  targets.forEach((target) => target.classList.add("is-revealed"));
}
