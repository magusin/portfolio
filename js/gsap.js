gsap.registerPlugin(ScrollTrigger);

gsap.to('.projet', {opacity: 1, duration: 1, backgroundColor: "rgba(120, 120, 120, 0.10)" ,y: 0, x:50, stagger:1.5});
gsap.to('.presentation-title', {duration:3, scale: 2.2, scrollTrigger: ".presentation-title"});
gsap.to('.contact-title', {duration:3, scale: 2.2, scrollTrigger: ".contact-title"});
gsap.to(".projet-title", {
    duration: 3,
    scale: 2.2,
    scrollTrigger: ".projet-title",
});
gsap.to(".presentation", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 1850,
    stagger: 1.5,
});
gsap.to(".projet", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 1850,
    scrollTrigger: ".projet",
});
gsap.to(".contact", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 1850,
    scrollTrigger: ".contact",
});
gsap.to(".contact-p", {
    duration: 4,
    opacity: 1,
    scrollTrigger: ".contact"
});
gsap.to(".projet-p", {
    duration: 4,
    opacity: 1,
    scrollTrigger: ".projet"
});
gsap.to(".presentation-p", {
    duration: 4,
    opacity: 1,
    scrollTrigger: ".presentation"
});





