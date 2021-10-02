function myFunction() {
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";
}
function disableScrolling() {
  setTimeout(function () {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  }, 2000);
}

function enableScrolling() {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "";
}

let card = document.querySelector(".ff1");
let q = document.querySelector(".lp1");
card.addEventListener("mouseenter", (e) => {
  q.style.visibility = "visible";
});

card.addEventListener("mouseleave", (e) => {
  q.style.visibility = "hidden";
});
card.addEventListener("mousemove", (event) => {
  var rect = card.getBoundingClientRect();
  console.log(event.clientX - rect.left);
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  if (y > -100 && x > -100 && x < 1000) {
    q.style.left = `${x}px`;
    q.style.top = `${y}px`;
  }
});
let card1 = document.querySelector(".ff");
let q1 = document.querySelector(".lp");
card1.addEventListener("mouseenter", (e) => {
  q1.style.visibility = "visible";
});

card1.addEventListener("mouseleave", (e) => {
  q1.style.visibility = "hidden";
});
card1.addEventListener("mousemove", (event) => {
  var rect = card1.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  if (y > -100 && x > -100 && x < 1000) {
    q1.style.left = `${x}px`;
    q1.style.top = `${y}px`;
  }
});
let card2 = document.querySelector(".ff3");
let q2 = document.querySelector(".lp3");
card2.addEventListener("mouseenter", (e) => {
  q2.style.visibility = "visible";
});

card2.addEventListener("mouseleave", (e) => {
  q2.style.visibility = "hidden";
});
card2.addEventListener("mousemove", (event) => {
  var rect = card2.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  if (y > -100 && x > -100 && x < 1000) {
    q2.style.left = `${x}px`;
    q2.style.top = `${y}px`;
  }
});
//scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

let firstmove = gsap.timeline({
  scrollTrigger: {
    trigger: ".firstcomponent",
    start: "top top",
    end: () => "+=" + innerHeight / 7,

    scrub: 2,
    onEnterBack: () => {
      gsap.set(".moveimage", { autoAlpha: 1 });
      gsap.set(" .moveimagek", { autoAlpha: 0 });
    },
    onLeave: () => {
      gsap.set(".moveimage", { autoAlpha: 0 });
      gsap.set(" .moveimagek", { autoAlpha: 1 });
    },
  },
});
firstmove.to(".moveimage", 10, {
  xPercent: "-=100",
  yPercent: "+=300",
  rotation: -70,
});

var rule = CSSRulePlugin.getRule(".firstcomponent:after");

gsap.to(rule, {
  borderBottomLeftRadius: "0% 0%",
  borderBottomRightRadius: "0% 0%",
  duration: 4,
  scrollTrigger: {
    trigger: ".firstcomponent",
    start: "center",

    scrub: 1,
  },
});
let secondmove = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondcomponent",
    start: "top top",
    end: () => "+=" + innerHeight / 2,

    scrub: 1,
    onEnterBack: () => {
      gsap.set(".moveimagek", { autoAlpha: 1 });
    },

    markers: true,
  },
});
secondmove.to(".moveimagek", 2, {
  yPercent: "+=100",
});
let secondmove2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondcomponent",
    start: "+=600%",
    end: () => "+=" + innerHeight,

    scrub: 1,
    onEnterBack: () => {
      gsap.set(".moveimagek", { autoAlpha: 1 });
      gsap.set(".moveimaget", { autoAlpha: 0 });
    },
    onLeave: () => {
      gsap.set(".moveimagek", { autoAlpha: 0 });
      gsap.set(".moveimaget", { autoAlpha: 1 });
    },
  },
});
secondmove2.to(".moveimagek", 2, {
  yPercent: "+=190",
  xPercent: "+=50",
});
let secondTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondcomponent",
    pin: ".secondcomponent",
    start: "top top",
    end: "+=600%",

    scrub: 1,
  },
});

secondTimeline
  .to(".scrollcontent", 4, { xPercent: "-=300" })
  .to(".secondsp-1", 3, { left: "-=5%", opacity: 1 }, "<=3")
  .to(".secondsp-2", 3, { left: "-=6%", opacity: 1 }, "<")
  .to(".secondsp-3", 3, { left: "-=3%", opacity: 1 }, "<")
  .to(".secondsp-4", 3, { left: "-=4%", opacity: 1 }, "<")
  .to(".secondsp-5", 3, { left: "-=7%", opacity: 1 }, "<")
  .to(".secondcontent", 2, { y: "-=90%", opacity: 0 }, "<")
  .to(
    ".secondcomponent",
    2,
    {
      background: "linear-gradient(31.44deg, #1d1229 -25.73%, #1b0225 93.25%)",
    },
    "<"
  );

let thirdmove = gsap.timeline({
  scrollTrigger: {
    trigger: ".thirdcomponent",
    start: "top",
    end: () => "+=" + innerHeight * 3,

    scrub: 1,
    onEnterBack: () => {
      gsap.set(".moveimaget", { autoAlpha: 1 });
      // gsap.set(".moveimaget", { autoAlpha: 0 });
    },
    onLeave: () => {
      // gsap.set(".moveimaget", { autoAlpha: 0 });
      // gsap.set(".moveimaget", { autoAlpha: 1 });
    },
  },
});
thirdmove
  .to(".moveimaget", 0.5, {
    yPercent: "+=100",
    xPercent: "+=100",
    rotation: 20,
  })
  .to(".moveimaget", 1, { xPercent: "-=100" });

let thirdmove2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".thirdcomponent",
    start: "+=700%",
    end: ".fourthcomponent center",

    scrub: 2,
    onEnterBack: () => {
      gsap.set(".moveimaget", { autoAlpha: 1 });
      // gsap.set(".moveimaget", { autoAlpha: 0 });
    },
    onLeave: () => {
      // gsap.set(".moveimaget", { autoAlpha: 0 });
      // gsap.set(".moveimaget", { autoAlpha: 1 });
    },

    markers: true,
  },
});
thirdmove2.to(".moveimaget", 2, {
  delay: 1,
  yPercent: "+=200",
  xPercent: "-=50",
  rotation: -60,
});

let thirdTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".thirdcomponent",
    pin: ".thirdcomponent",
    start: "top ",
    end: "+=700%",

    scrub: 1,
  },
});

thirdTimeline
  .to(".leftf", 1, { y: "-=10%", opacity: 0 }, "0.5")
  .to(".lefts", 1, { y: "-=10%", opacity: 1 }, "<")

  .to(".wal", 2, { opacity: 1 }, "<0.1")
  .to(".wal2", 2, { opacity: 0 }, "<")

  .to(".t1", 2, { y: "+=100%", opacity: 0 }, "<")
  .to(".t11", 2, { y: "+=100%", opacity: 1 }, "<")
  .to(".t2", 2, { y: "-=100%", opacity: 0 }, "<")
  .to(".t22", 2, { y: "-=100%", opacity: 1 }, "<");
let fourthTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourthcomponent",
    pin: ".fourthcomponent",
    start: "top ",
    end: "+=500%",

    scrub: 1,
  },
});

fourthTimeline
  .to(".a", 2, { y: "+=15%", x: "-=9%" })
  .to(".aa", 2, { y: "+=15%", x: "-=9%" }, "<")
  .to(".a", 1, { opacity: 0 }, "<=1")
  .to(".aa", 1, { opacity: 1 }, "<")
  .to(".bb", 1, { opacity: 1 }, "<")
  .to(".b", 1, { opacity: 0 }, "<")
  .to(".aa", 2, { rotation: 90, transformOrigin: "50% 50%" })
  .to(".a", 2, { rotation: 90, transformOrigin: "50% 50%" }, "<")
  .to(".b", 2, { rotation: 90, transformOrigin: "50% 50%" }, "<")
  .to(".bb", 2, { rotation: 90, transformOrigin: "50% 50%" }, "<")
  .to(".aa", 1, {
    rotation: 120,
    x: "20%",
  })
  .to(".fof", 1, { y: "-=10%", opacity: 0 }, "<")
  .to(".fos", 1, { y: "-=10%", opacity: 1 }, "<");

var rule2 = CSSRulePlugin.getRule(".top:after");
let sTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".seventhcomponent",

    // start: "top",
    end: "top-=200",

    scrub: 1,
  },
});

sTimeline
  .to(".moveimage1", 4, { yPercent: "+=50", opacity: 1 })
  .to(".endstars-type1", 5, { top: "+=5%", opacity: 1 }, "<=3")
  .to(".endstars-type12", 5, { top: "+=6%", opacity: 1 }, "<")
  .to(".endstars-type13", 5, { top: "+=3%", opacity: 1 }, "<")
  .to(".endstars-type14", 5, { top: "+=3%", opacity: 1 }, "<")
  .to(".endstars-type15", 3, { top: "+=3%", opacity: 1 }, "<")
  .to(".endstars-type16", 5, { top: "+=3%", opacity: 1 }, "<")
  .to(".endstars-type2", 5, { top: "+=3%", opacity: 1 }, "<")
  .to(".endstars-type22", 3, { top: "+=3%", opacity: 1 }, "<")
  .to(".endstars-type23", 3, { top: "+=3%", opacity: 1 }, "<")
  .to(
    rule2,
    5,
    { background: "radial-gradient(at top, #1073d299, #2954723d, black)" },
    "<"
  );

let sixthTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixthcomponent",

    start: "top-=500px",
    end: "bottom+=100px",

    scrub: 1,
  },
});

sixthTimeline.to(".f", 3, { x: "-=10%" }, "").to(".s", 3, { x: "+=10%" }, "<");

let hovers = document.querySelectorAll(".middlecontent");
let rest = document.querySelector(".restheading");
let a1 = document.querySelector(".hovercontent");
const mouseOver = (e) => {
  let a = document.querySelector(".hovercontent");
  a.classList.remove("removehovr");
  a.style.display = "block";
  a.classList.add("addss");
  setTimeout(() => {
    for (let opacity = 0; opacity < 1.1; opacity = opacity + 0.1) {
      rest.style.opacity = opacity;
    }
  }, 900);
};
const mouseleave = (e) => {
  rest.style.opacity = 0;

  let a = document.querySelector(".hovercontent");
  a.classList.remove("addss");
  a.classList.add("removehovr");
};
a1.addEventListener("mouseover", mouseOver, false);
a1.addEventListener("mouseleave", mouseleave, false);
hovers.forEach((element) => {
  element.addEventListener("mouseover", mouseOver, false);
  element.addEventListener("mouseleave", mouseleave, false);
});

let f = document.querySelector(".first");
let s = document.querySelector(".second");
let l = document.querySelector(".third");
let list = document.querySelector(".cont");
let p = [true, true, true];
f.addEventListener("mouseover", (e) => {
  let l = document.querySelector(".head");

  l.innerHTML = f.textContent;
  let a = ["DSfdsf", "SDFDSf", "fsdfsdfs"];
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  if (p[0]) {
    a.forEach((ele) => {
      let k = document.createElement("DIV");
      k.className = "list";
      k.innerHTML = ele;
      list.appendChild(k);
    });
  }
});
s.addEventListener("mouseover", (e) => {
  let l = document.querySelector(".head");
  l.innerHTML = s.textContent;
  let a = ["DSfdsf1", "SDFDSf1", "fsdfsdfs1"];
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  if (p[1]) {
    a.forEach((ele) => {
      let k = document.createElement("DIV");
      k.className = "list";
      k.innerHTML = ele;
      list.appendChild(k);
    });
  }
});

l.addEventListener("mouseover", (e) => {
  let lr = document.querySelector(".head");
  lr.innerHTML = l.textContent;
  let a = ["DSfdsf2", "SDFDSf2", "fsdfsdfs2"];

  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  if (p[2]) {
    a.forEach((ele) => {
      let k = document.createElement("DIV");
      k.className = "list";
      k.innerHTML = ele;
      list.appendChild(k);
    });
  }
});

// let card1 = document.querySelector(".ff");
// let q1 = document.querySelector(".lp");
// card1.addEventListener("mouseenter", (e) => {
//   q1.style.visibility = "visible";
// });

// card1.addEventListener("mouseleave", (e) => {
//   q1.style.visibility = "hidden";
// });
