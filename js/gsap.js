gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({})

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

gsap.to(".projets", {
    duration: 1,
    backgroundColor: "rgba(120, 120, 120, 0.10)",
    x: 2000,
    scrollTrigger: ".projets",
})
gsap.to(".projets-p", {
    duration: 4,
    opacity: 1,
    scrollTrigger: ".projets",
},">")
gsap.to('.projets-title', {duration:2, scale: 2, scrollTrigger:".projets-title"
},"<");
gsap.to('.projets_container_element-title',{
    duration: 2,
    scale: 1.5,
    scrollTrigger: ".projets"
})
gsap.to(".header_nav-right", {
    duration: 1,
    opacity: 1,
})
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
        y: 0,
    })
    timeline.to(".header_nav", {
        duration: 0.5,
        opacity: 0,
    },"<")
    timeline.to(".header_nav-right", {
        duration: 0.5,
        opacity: 0,
    },">")
    timeline.to(".log", {
        duration: 1,
        backgroundColor: "rgba(120, 120, 120, 0.10)",
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
    timeline.to('.main', {
        duration: 2,
        x: 0,
        y: 0,
    })
    timeline.to(".header_nav", {
        duration: 1,
        opacity: 1,
    },">")
    timeline.to('.header_nav-right', {
        duration: 1,
        opacity: 1,
    })
    timeline.to('.header_nav-left', {
        duration: 0.5,
        opacity: 0,
    },"<")
    timeline.to('.log-p', {
        duration: 0.1,
        opacity: 0,
    }, "<")
    timeline.to('.log-title', {
        duration: 0.1,
        scale: 1,
    },">")
    document.querySelector('.header_nav-left').classList.add('hidden');
    document.querySelector('.header_nav-right').classList.remove('hidden');
    document.querySelector('.header_nav').classList.remove('hidden');
}

function projetNala() {
    if (document.querySelector('.nala').classList.contains('hidden')) {
        document.querySelector('.nala').classList.remove('hidden');
        timeline.to('.nala', {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector('.nala').classList.add('hidden');
        timeline.to('.nala', {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function projetCv() {
    if (document.querySelector('.cv').classList.contains('hidden')) {
        document.querySelector('.cv').classList.remove('hidden');
        timeline.to('.cv', {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector('.cv').classList.add('hidden');
        timeline.to('.cv', {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function projetEnigma() {
    if (document.querySelector('.enigma').classList.contains('hidden')) {
        document.querySelector('.enigma').classList.remove('hidden');
        timeline.to('.enigma', {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector('.enigma').classList.add('hidden');
        timeline.to('.enigma', {
            duration: 0.1,
            opacity: 0,
        })
    }
}




