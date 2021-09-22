gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({})

document.addEventListener("DOMContentLoaded", function() {
    start();
  });

function triggerToLog() {
    timeline.to(".main", {
        duration: 1,
        opacity: 0,
        x: -4000,
        
    })
    timeline.to(".main-controller-2", {
         duration: 1,
         opacity: 1,
     })
    timeline.to(".header_nav", {
         duration: 0.5,
         opacity: 0,
     },"<")
    document.querySelector(".header_nav").classList.add("hidden");
    document.querySelector(".header_nav-right").classList.add("hidden");
    document.querySelector(".header_nav-left").classList.remove("hidden");
    timeline.to(".header_nav-left", {
         duration: 1,
         opacity: 1,
     }, "<-1")
    
     timeline.add(theShowMustGoOn(), offStart())
}

function triggerToAccueil() {
    timeline.to(".main-controller-2", {
        duration: 1,
        opacity: 0,
    })
    timeline.to(".main", {
        duration: 1,
        opacity: 1,
        x: 0,  
    })
    timeline.to(".header_nav", {
        duration: 1,
        opacity: 1,
    },">")
    timeline.to(".header_nav-right", {
        duration: 1,
        opacity: 1,
    })
    timeline.to(".header_nav-left", {
        duration: 0.5,
        opacity: 0,
    },"<")
    document.querySelector(".header_nav-left").classList.add("hidden");
    document.querySelector(".header_nav-right").classList.remove("hidden");
    document.querySelector(".header_nav").classList.remove("hidden");
    timeline.add(start(), theShowMustGoOff())
    
}

function start() {
    gsap.to(".header_nav-right", {
        duration: 1,
        opacity: 1,
        delay: 2
        
    })
    gsap.to(".header_nav_ul", {
        duration: 2,
        opacity: 1,
    })
    gsap.to(".presentation", {
        duration: 1,
        opacity: 1,
        backgroundColor: "rgba(120, 120, 120, 0.20)",
        x: 2000,
    })
    gsap.to(".presentation-p", {
        duration: 1,
        opacity: 1,
    },">")
    gsap.to(".presentation-title", {duration:2, scale: 1.6
    },">")

    gsap.to(".projets", {
        duration: 1,
        backgroundColor: "rgba(120, 120, 120, 0.20)",
        x: 2000,
        scrollTrigger: {
               trigger: ".projets",
            start: "-10px 80%",
        },
    })
    gsap.to(".projets-p", {
        duration: 1,
        opacity: 1,
        delay: 2,
        scrollTrigger: {
            trigger: ".projets",
            start: "-10px 80%",
        },
    },">")
    gsap.to(".projets_container", {
        duration: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: ".projets_container",
            start: "-10px 80%",
        },  
    }, "<")
    gsap.to(".projets-title", {duration:2, scale: 1.6, delay: 2, scrollTrigger: { trigger: ".projets", start: "-10px 80%" }
    },"<")
    gsap.to(".projets_container_element-title",{
        duration: 2,
        scale: 1.6,
        scrollTrigger: {
            trigger: ".projets",
            start: "-10px 80%",
        },  
    },">")

    gsap.to(".contact", {
        duration: 1,
        backgroundColor: "rgba(120, 120, 120, 0.20)",
        x: 2000,
        scrollTrigger: {
            trigger: ".contact",
            start: "-10px 80%",
       }, 
    })
    gsap.to(".contact-p", {
        duration: 2,
       opacity: 1,
       scrollTrigger: {
           trigger: ".contact-p",
           start: "-10px 80%",
       }, 
    },">")
    gsap.to(".contact-title", {duration:2, scale: 1.6, scrollTrigger:".contact-title"
    },"<")
    gsap.to(".contact_div", {
        duration: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: ".contact_div",
            start: "-10px 80%",
        }, 
    },">")
    gsap.to(".contact_div-2", {
        duration: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: ".contact_div-2",
           start: "-10px 80%",
       }, 
    },">")
}

function offStart() {
    gsap.to(".header_nav-right", {
        opacity: 0,
    })
    gsap.to(".header_nav_ul", {
        opacity: 0,
    })
    gsap.to(".presentation", {
        opacity: 0,
        x: -2000,
        backgroundColor: "rgba(120, 120, 120, 0)",
    })
    gsap.to(".presentation-p", {
        opacity: 0,
    })
    gsap.to(".presentation-title", {duration:0.1, scale: 1
    })

    gsap.to(".projets", {
        x: -2000,
        backgroundColor: "rgba(120, 120, 120, 0)",
    })
    gsap.to(".projets-p", {
        opacity: 0,
    })
    gsap.to(".projets_container", {
        opacity: 0, 
    })
    gsap.to(".projets-title", {duration:0.1, scale: 1
    })
    gsap.to(".projets_container_element-title",{
        scale: 1,
    })

    gsap.to(".contact", {
        x: -2000,
        backgroundColor: "rgba(120, 120, 120, 0)",
    })
    gsap.to(".contact-p", {
       opacity: 0,
    })
    gsap.to(".contact-title", {duration:0.1, scale: 1 
    })
    gsap.to(".contact_div", {
        opacity: 0,
    })
    gsap.to(".contact_div-2", {
        opacity: 0,
    })
}

function theShowMustGoOn() {
    gsap.to(".log", {
        duration: 1,
        backgroundColor: "rgba(120, 120, 120, 0.20)",
    })
    gsap.to(".log-title", {
        duration: 2,
        scale: 1.6,
    }, ">")
    gsap.to(".log-p", {
        duration: 1,
        opacity: 1,
        delay: 1
    }, "<")
    gsap.to(".competences", {
        duration: 1,
        opacity: 1,
        delay: 1,
        backgroundColor: "rgba(120, 120, 120, 0.20)",
        scrollTrigger: {
            trigger: ".competences",
            start: "-10px 80%",
        } 
    })
    gsap.to(".competences-title", {duration:2, scale: 1.6, scrollTrigger:".competences"
},">");
    gsap.to(".competences_container_section", {
        opacity: 1,
        stagger: 0.4,
        delay: 1,
        scrollTrigger: {
            trigger: ".competences_container_section",
            start: "-5px 80%",
    
        } 
    },">1")
    gsap.to(".html", {
        duration: 0.4,
        value: "100"
    }, "<")
    gsap.to(".js", {
        duration: 0.4,
        value: "95"
    }, ">")
    gsap.to(".php", {
        duration: 0.4,
        value: "45"
    }, ">")
    gsap.to(".react", {
        duration: 0.4,
        value: "35"
    }, ">")
    gsap.to(".redux", {
        duration: 0.4,
        value: "30"
    }, ">")
    gsap.to(".node", {
        duration: 0.4,
        value: "20"
    }, ">")
    gsap.to(".bootstrap", {
        duration: 0.4,
        value: "95"
    }, ">")
    gsap.to(".symfony", {
        duration: 0.4,
        value: "10"
    }, ">")
    gsap.to(".typescript", {
        duration: 0.4,
        value: "20"
    }, ">")
    gsap.to(".angular", {
        duration: 0.4,
        value: "15"
    }, ">")
    gsap.to(".wordpress", {
        duration: 0.4,
        value: "40"
    }, ">")
    gsap.to(".sql", {
        duration: 0.4,
        value: "65"
    }, ">")
}

function theShowMustGoOff() {
    gsap.to(".log", {
        backgroundColor: "rgba(120, 120, 120, 0)",
    })
    gsap.to(".log-title", {
        scale: 1,
    })
    gsap.to(".log-p", {
        opacity: 0,  
    })
    gsap.to(".competences", {
        opacity: 0,
        backgroundColor: "rgba(120, 120, 120, 0)",
    })
    gsap.to(".competences-title", {scale: 1,
},">");
    gsap.to(".competences_container_section", {
        opacity: 0, 
    })
    gsap.to(".progress", {
        value: "0", 
    }) 
}

function projetNala() {
    if (document.querySelector(".nala").classList.contains("hidden")) {
        document.querySelector(".nala").classList.remove("hidden");
        timeline.to(".nala", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".nala").classList.add("hidden");
        timeline.to(".nala", {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function projetCv() {
    if (document.querySelector(".cv").classList.contains("hidden")) {
        document.querySelector(".cv").classList.remove("hidden");
        timeline.to(".cv", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".cv").classList.add("hidden");
        timeline.to(".cv", {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function projetEnigma() {
    if (document.querySelector(".enigma").classList.contains("hidden")) {
        document.querySelector(".enigma").classList.remove("hidden");
        timeline.to(".enigma", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".enigma").classList.add("hidden");
        timeline.to(".enigma", {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function listHisto() {
    if (document.querySelector(".historique").classList.contains("hidden")) {
        document.querySelector(".historique").classList.remove("hidden"),
        document.querySelector(".historique-container .fa-chevron-right").classList.add("r-90");
        timeline.to(".historique", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".historique").classList.add("hidden");
        document.querySelector(".historique-container .fa-chevron-right").classList.remove("r-90");
        timeline.to(".historique", {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function listSept() {
    if (document.querySelector(".septembre").classList.contains("hidden")) {
        document.querySelector(".septembre").classList.remove("hidden"),
        document.querySelector(".historique-border-sept .fa-long-arrow-alt-right").classList.add("r-90"),
        document.querySelector(".historique-border-sept .fa-long-arrow-alt-left").classList.add("r-270"),
        document.querySelector(".historique-border-sept .fa-chevron-up").classList.add("r-180");
        timeline.to(".septembre", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".septembre").classList.add("hidden");
        document.querySelector(".historique-border-sept .fa-long-arrow-alt-right").classList.remove("r-90"),
        document.querySelector(".historique-border-sept .fa-long-arrow-alt-left").classList.remove("r-270"),
        document.querySelector(".historique-border-sept .fa-chevron-up").classList.remove("r-180");
        timeline.to(".septembre", {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function listAout() {
    if (document.querySelector(".aout").classList.contains("hidden")) {
        document.querySelector(".aout").classList.remove("hidden"),
        document.querySelector(".historique-border-aout .fa-long-arrow-alt-right").classList.add("r-90"),
        document.querySelector(".historique-border-aout .fa-long-arrow-alt-left").classList.add("r-270"),
        document.querySelector(".historique-border-aout .fa-chevron-up").classList.add("r-180");
        timeline.to(".aout", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".aout").classList.add("hidden");
        document.querySelector(".historique-border-aout .fa-long-arrow-alt-right").classList.remove("r-90"),
        document.querySelector(".historique-border-aout .fa-long-arrow-alt-left").classList.remove("r-270"),
        document.querySelector(".historique-border-aout .fa-chevron-up").classList.remove("r-180");
        timeline.to(".aout", {
            duration: 0.1,
            opacity: 0,
        })
    }
}

function todoList() {
    if (document.querySelector(".todoList").classList.contains("hidden")) {
        document.querySelector(".todoList").classList.remove("hidden"),
        document.querySelector(".todoList-container .fa-chevron-right").classList.add("r-90");
        timeline.to(".todoList", {
            duration: 1.5,
            opacity: 1,
        })
    } else {
        document.querySelector(".todoList").classList.add("hidden");
        document.querySelector(".todoList-container .fa-chevron-right").classList.remove("r-90");
        timeline.to(".todoList", {
            duration: 0.1,
            opacity: 0,
        })
    }
}







