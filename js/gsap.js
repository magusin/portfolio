gsap.registerPlugin(ScrollTrigger);


// var oberver = new IntersectionObserver(function(entries, self)
// {
//     let targets = entries.map(entry => {
//         if(entry.isIntersecting) {
//             self.MutationObserver(entry.target);
//             return entry.target;
//         }
//     })
// }
const presentation = document.querySelector(".presentation p");
const projet = document.querySelector(".projet");
const contact = document.querySelector(".contact");
const title = document.querySelector(".presentation-title");

// gsap.from(title, {
//     scrollTrigger: {
//         trigger: presentation,
//         start: "-20px 80%",
//         scrub: true,
      
//     },
//     duration: 1,
//     opacity: 0,
//     backgroundColor: "rgba(120, 120, 120, 0.10)",
// }),
gsap.to('.presentation', {opacity: 1, duration: 1, backgroundColor: "rgba(120, 120, 120, 0.10)" ,y: 0, x:1850, stagger:0.2});
gsap.to('.projet', {opacity: 1, duration: 1, backgroundColor: "rgba(120, 120, 120, 0.10)" ,y: 0, x:50, stagger:1.5});
gsap.to('.presentation-title', {opacity: 1, duration:2, scale: 2.2});





