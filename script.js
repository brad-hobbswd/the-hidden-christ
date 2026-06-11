/* ===================================

THE HIDDEN CHRIST

Bradley Hobbs

=================================== */

document.addEventListener("DOMContentLoaded",()=>{

const header=document.querySelector(".site-header");

const sections=document.querySelectorAll("section");

const navigation=document.querySelectorAll(".navigation-links a");

const hero=document.querySelector(".hero");

/* ===================================

HEADER

=================================== */

function updateHeader(){

header.classList.toggle(

"scrolled",

window.scrollY>80

);

}

/* ===================================

ACTIVE NAVIGATION

=================================== */

function updateNavigation(){

let current="";

sections.forEach(section=>{

if(

window.scrollY>=section.offsetTop-180

){

current=section.id;

}

});

navigation.forEach(link=>{

link.classList.toggle(

"active",

link.getAttribute("href")==="#" + current

);

});

}

/* ===================================

SCROLL EVENTS

=================================== */

function handleScroll(){

updateHeader();

updateNavigation();

if(hero){

hero.style.backgroundPositionY=

window.pageYOffset*.35+"px";

}

}

handleScroll();

window.addEventListener(

"scroll",

handleScroll,

{

passive:true

}

);

/* ===================================

SCROLL REVEAL

=================================== */

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

observer.unobserve(entry.target);

}

});

},

{

threshold:.18,

rootMargin:"0px 0px -80px 0px"

}

);

document

.querySelectorAll(

".section-heading,.chapter,.book-layout,.author-layout"

)

.forEach(item=>observer.observe(item));

/* ===================================

SMOOTH INTERNAL LINKS

=================================== */

document

.querySelectorAll('a[href^="#"]')

.forEach(link=>{

link.addEventListener(

"click",

event=>{

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

event.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

}

);

});

/* ===================================

REDUCED MOTION

=================================== */

if(

window.matchMedia(

"(prefers-reduced-motion: reduce)"

).matches

){

document.documentElement.style.scrollBehavior="auto";

observer.disconnect();

}

});