<script setup>
import { onMounted } from 'vue';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

onMounted(() => {
  const shapeBgEndPoint = window.innerHeight / 1.125;
  gsap.utils.toArray(".split").forEach((element, index) => {
    const split = new SplitText(element, {
      type: "lines",
      linesClass: "line",
      autoSplit: true
    });

    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
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

  const sectionBackgrounds = gsap.utils.toArray(".shaped-bg");
  if (!sectionBackgrounds.length) return;
  const triggerAnimation = (section) => {
    const shapes = section.querySelectorAll('.shaped-bg__decoration path');
    gsap.to(section, {
      duration: 1.2,
      backgroundColor: '#F4D734',
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: `+=${shapeBgEndPoint}`,
        scrub: true,
      }
    }),
    shapes.forEach((shape) => {
      gsap.to(shape, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: `+=${shapeBgEndPoint}`,
          scrub: true
        }, 
        duration: 1.2, 
        fill: "#F4D734", 
      });
    })
  }
  sectionBackgrounds.forEach(section => {
    triggerAnimation(section)
  })

});
</script>
