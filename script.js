// swiper.js

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


document.querySelector("#page1 h3>button").addEventListener("mouseover", function (det) {
    document.querySelector("#green").style.left = "0"
}
)
document.querySelector("#grndiv").addEventListener("mouseover", function (det) {
    document.querySelector("#grndiv>.bg-grn").style.left = "0"
}
)
document.querySelector("#greendiv").addEventListener("mouseover", function (det) {
    document.querySelector(".green").style.left = "0"
}
)
// #page1 h3>button>#green
document.querySelector("#page1 h3>button").addEventListener("mouseout", function (det) {
    document.querySelector("#green").style.left = "-100%"
}
)
document.querySelector("#greendiv").addEventListener("mouseout", function (det) {
    document.querySelector(".green").style.left = "-100%"
}
)
document.querySelector("#grndiv").addEventListener("mouseout", function (det) {
    document.querySelector("#grndiv>.bg-grn").style.left = "-100%"
}
)
// hover code
document.querySelector(".case1").addEventListener("mouseover", function (det) {
    document.querySelector(".case1>#case-img1").style.transform = "scale(1.2)"
    document.querySelector(".grn-1").style.left="0"

}
)
document.querySelector(".case2").addEventListener("mouseover", function (det) {
    document.querySelector(".case2>#case-img2").style.transform = "scale(1.2)";
    document.querySelector(".grn-2").style.left="0"
}
)
document.querySelector(".case1").addEventListener("mouseout", function (det) {
    document.querySelector(".case1>#case-img1").style.transform = "initial"
    document.querySelector(".grn-1").style.left="-100%"
}
)
document.querySelector(".case2").addEventListener("mouseout", function (det) {
    document.querySelector(".case2>#case-img2").style.transform = "initial"
    document.querySelector(".grn-2").style.left="-100%";
}
)
document.querySelector(".btn-work").addEventListener("mouseover", function (det) {
    document.querySelector(".btn-grn").style.left="0%"
}
)
document.querySelector(".btn-work").addEventListener("mouseout", function (det) {
    document.querySelector(".btn-grn").style.left="-100%"
}
)
document.querySelector(".b-3").addEventListener("mouseover", function (det) {
    document.querySelector(".b-3>.grn-1").style.left="0"
}
)

document.querySelector(".b-3").addEventListener("mouseout", function (det) {
    document.querySelector(".b-3>.grn-1").style.left="-100%"
}
)
// gsap code
var tl = gsap.timeline()
tl.from("#img1", {
    delay: 0.3,
    opacity: 0,
    duration: 0.8,
    y: 100
})
    .from("#img2", {
        delay: 0.3,
        opacity: 0,
        duration: 0.8,
        x: 100
    }, "-=0.8")
    .from("#img3", {
        delay: 0.3,
        opacity: 0,
        duration: 0.8,
        y: -100
    }, "-=0.8")
    .from("#page1 h1", {
        delay: 0.3,
        opacity: 0,
        duration: 0.8,
    })
    .from("#page1 h3", {
        delay: 0.3,
        opacity: 0,
        duration: 0.2,
    })
    .from("#page2 h5 , #page2 h1 , #page2 #about-us", {
        opacity: 0,
        // duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page2 h5",
            scroller: "body",
            start: "top 60%",
        }
    })
    .from("#left #img4,#left #img6", {
        opacity: 0,
        // duration:0.8,
        // delay:0.3,
        stagger: 0.4,
        x:100,
        scrollTrigger: {
            trigger: "#left #img4",
            scroller: "body",
            start: "top 60%",
        }
    })
    .from("#left #img5,#left #img7", {
        opacity: 0,
        duration:0.8,
        delay:0.3,
        stagger: 0.4,
        x:-100,
        scrollTrigger: {
            trigger: "#left #img5",
            scroller: "body",
            start: "top 60%",
        }
    })
    .from("#right h5 , #right h1 , #right #learnabout", {
        opacity: 0,
        stagger: 0.4,
        // y:100,
        scrollTrigger: {
            trigger: "#right h5",
            scroller: "body",
            start: "top 60%",
        }
    })
    .from("#page4 #text>h1 , #boxs .box>img , #page4 footer", {
        opacity: 0,
        // duration: 1,
        stagger: 0.3,

        scrollTrigger: {
            trigger: "#page4 #text>h1",
            scroller: "body",
            start: "top 60%",
        }
    })
    .from("#case .case1 , #case .case2 , #page5 footer", {
        opacity: 0,
        // duration: 1,
        stagger: 0.3,
        x:10,
        scrollTrigger: {
            trigger: "#case .case1",
            scroller: "body",
            start: "top 60%",
        }
    })
    .from("#page7 .f-1,#page7 .f-2,#page7 .f-3 ", {
        opacity: 0,
        // duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: "#page7 .f-1",
            scroller: "body",
            start: "top 60%",
        }
    },"-=.8")