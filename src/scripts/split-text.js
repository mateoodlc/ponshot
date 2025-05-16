import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

document.querySelectorAll(".split").forEach((element, index) => {
  const split = new SplitText(element, {
    type: "lines,words",
    linesClass: "line"
  });

  gsap.from(split.lines, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1.2,
    yPercent: 100,
    xPercent: index % 2 !== 0 ? -2 : 2,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out"
  });
});
