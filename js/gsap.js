gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({})
// gsap.to('.presentation-title', {duration:3, scale: 2.2, scrollTrigger: ".presentation-title"});
// gsap.to('.contact-title', {duration:3, scale: 2.2, scrollTrigger: ".contact-title"});
// gsap.to(".projet-title", {
//     duration: 3,
//     scale: 2.2,
//     scrollTrigger: ".projet-title",
// });
// gsap.to(".presentation", {
//     duration: 1,
//     backgroundColor: "rgba(120, 120, 120, 0.10)",
//     x: 2000,
//     stagger: 1.5,
// });
// gsap.to(".projet", {
//     duration: 1,
//     backgroundColor: "rgba(120, 120, 120, 0.10)",
//     x: 2000,
//     scrollTrigger: ".projet",
// });
// gsap.to(".contact", {
//     duration: 1,
//     backgroundColor: "rgba(120, 120, 120, 0.10)",
//     x: 2000,
//     scrollTrigger: ".contact",
// });
// gsap.to(".contact-p", {
//     duration: 4,
//     opacity: 1,
//     scrollTrigger: ".contact"
// });
// gsap.to(".projet-p", {
//     duration: 4,
//     opacity: 1,
//     scrollTrigger: ".projet"
// });
// gsap.to(".presentation-p", {
//     duration: 4,
//     opacity: 1,
//     scrollTrigger: ".presentation"
// });

timeline
.to(".presentation", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 2000,
})
.to(".presentation-p", {
    duration: 2,
    opacity: 1,
})
.to('.presentation-title', {duration:1, scale: 2
},"<");

gsap.to(".projet", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 2000,
    scrollTrigger: ".projet",
})
gsap.to(".projet-p", {
    duration: 4,
    opacity: 1,
    scrollTrigger: ".projet-p",
},">1")
gsap.to('.projet-title', {duration:2, scale: 2, scrollTrigger:".projet-title"
},"<");

gsap.to(".contact", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 2000,
    scrollTrigger: ".contact",
})
gsap.to(".contact-p", {
    duration: 4,
    opacity: 1,
    scrollTrigger: ".contact-p",
},"<")
gsap.to('.contact-title', {duration:2, scale: 2, scrollTrigger:".contact-title"
},"<");
gsap.to(".header_nav_ul", {
    duration: 1,
    opacity: 1,
})

function triggerToLog() {
    timeline.to('.main', {
        duration: 2,
        opacity: 1,
        x: -2000,
    })
    timeline.to(".header_nav", {
        duration: 0.5,
        opacity: 0,
    })
    timeline.to(".log", {
        duration: 1,
        backgroundColor: "rgba(120, 120, 120, 0.10)",
        scrollTrigger: ".log",
    })
    timeline.to('.log-title', {
        duration: 1,
        scale: 2,

    },">")
    timeline.to('.log-p', {
        duration: 3,
        opacity: 1,
    }, "<")
    document.querySelector('.header_nav').classList.add('hidden');
    document.querySelector('.header_nav-right').classList.add('hidden');
    document.querySelector('.header_nav-left').classList.remove('hidden');
    timeline.to(".header_nav-left", {
        duration: 1,
        opacity: 1,
    }, "<-1")
    
};

function triggerToAccueil() {
    timeline.to(".header_nav-left", {
        duration: 1,
        opacity: 0,
    })
    timeline.to('.main', {
        duration: 1,
        x: 0,
    },"<")
    timeline.to('.header_nav-right', {
        duration: 1,
        opacity: 1,
    },">")
    document.querySelector('.header_nav').classList.remove('hidden');
    timeline.to(".header_nav", {
        duration: 2,
        opacity: 1,
    })
    timeline.to('.header_nav-left', {
        duration: 1,
        opacity: 0,
    },">")
    document.querySelector('.header_nav-left').classList.add('hidden');
    document.querySelector('.header_nav-right').classList.remove('hidden');

}




