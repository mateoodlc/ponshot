import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// Registrar el plugin
gsap.registerPlugin(DrawSVGPlugin);

window.addEventListener('DOMContentLoaded', () => {
  // Anima todos los elementos <path> del SVG
  const paths = document.querySelectorAll("svg path");
  console.log(paths);

  paths.forEach((path, index) => {
    gsap.fromTo(
      path,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: 1.2,
        delay: index * 0.15, // efecto secuencial
        ease: "power2.out",
      }
    );
  });
});