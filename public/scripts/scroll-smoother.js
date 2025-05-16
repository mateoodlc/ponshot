import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.addEventListener('DOMContentLoaded', () => {
  ScrollSmoother.create({
    smooth: 3,
    effects: true,
    smoothTouch: 0.3,
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  });
});