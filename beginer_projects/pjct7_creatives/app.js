

var tl = gsap.timeline({
    defaults: {
        opacity: 0,
        ease: "linear",
        duration: 1,
    }
});


tl.fromTo(".sidebar", {
    width: 0,
    }, {
    opacity: 1,
    width: "30%"
});


tl.fromTo(".content", {
    x: 100,
    }, {
    opacity: 1,
    x: 0
})

tl.to(".main-info", {
    transform: "rotate(360deg)",
    opacity: 1
})

tl.to(".main-title", {
    transform: "rotate(360deg)",
    opacity: 1,
})


tl.fromTo(".main-image", {
    x: 0,
    scale: 0.5
    }, {
    opacity: 1,
    scale: 1,
    marginLeft: "200px",
    marginRight: "10px",
    duration: 2
});
