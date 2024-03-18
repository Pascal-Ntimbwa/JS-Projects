// "gsap"object to use the gsp library

// ___set()__method
// gsap.set(".box", {
//     opacity:1,
//     background:"",
// })

//___to()___method
// gsap.to(".box", {
//     opacity: 0,
//     background:"crimson",
//     duration: 2,
//     y:100,
//     repeat:-1,
//     yoyo: true
// })

//___from() and fromTo()___methods

// *in from() method we dont have to specify the initial state, (it will figure it out by itself)

// gsap.from(".box1", {
//     y:-200,
//     duration: 3,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true
// })

// // *in fromTo method you HAVE to specify the default value, and also the new animation state.

// gsap.fromTo(".box2", {
//     y: 200,
//     opacity: 0,
// }, {
//     y: -200,
//     opacity: 1,
//     duration: 3,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true,
//     width: 100,
//     height: 100,
//     fontSize: 40
// })


// gsap.fromTo(".box3", {
//     x: 200
// }, {
//     x: -200,
//     duration: 1,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true
// })

//___Staggers____

// gsap.set(".box", {
//     borderRadius: 0,
// });


// gsap.to(".box", {
//     borderRadius: 50,
//     y: 50,
//     duration: 2,
//     background: "teal",
//     ease: "power1",
//     yoyo: true,
//     repeat: -1,
//     stagger: {
//         grid: [7, 15],
//         amount: 2,
//         each: 0.05,
//         from: 0,
//         axis: "x"
        
//     }
// })


//___Controlling Tweens______

// let play = document.querySelector(".play");
// let pause = document.querySelector(".pause");
// let restart = document.querySelector(".restart");


// let tween = gsap.to(".box1", {
//     y: -200,
//     duration: 4,
//     backgroundColor: "aqua",
//     repeat: -1,
//     yoyo: true,
//     ease: "linear"
// })


// play.addEventListener("click", () => tween.play());
// pause.addEventListener("click", () => tween.pause());
// restart.addEventListener("click", () => tween.restart());


//___Timelines______(time line for a tween)

// var tl = gsap.timeline()


// tl.to(".box1", {
//     duration: 2,
//     scale: 0,
//     opacity: 0,
//     delay: 1,
// }).to(".box2", {
//     duration: 2,
//     x: -200,
// }).to(".box3", {
//     duration: 2,
//     x: -200,
//     borderRadius: 0,
//     rotate: 360,
// }).set(".box1", {
//      duration: 3,
//      scale: 1,
//      opacity: 1,
// })


// refactor the above timeline:

var tl = gsap.timeline({
    defaults: {
        duration: 2,
        ease:"power1"
    }
})

tl.to(".box1", {
    scale: 0,
    opacity: 0,
    delay: 1,
}).to(".box2", {
    x: -200,
    scale: 2,
}).to(".box3", {
    x: -200,
    borderRadius: 0,
    rotate: 360,
}).set(".box1", {
    x: 0,
}).to(".box1", {
    scale: 5,
    opacity: 1,
})







