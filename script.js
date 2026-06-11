/* ===================================

THE HIDDEN CHRIST

Bradley Hobbs

=================================== */

document.addEventListener("DOMContentLoaded",()=>{

const header=document.querySelector(".site-header");

const sections=document.querySelectorAll("section");

const navigation=document.querySelectorAll(".navigation-links a");

const revealElements=document.querySelectorAll(

".chapter,.book-layout,.author-layout,.contact form,.section-heading"

);

/* ===================================

HEADER

=================================== */

function updateHeader(){

if(window.scrollY>80){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

}

updateHeader();

window.addEventListener(

"scroll",

updateHeader,

{

passive:true

}

);

/* ===================================

ACTIVE NAVIGATION

=================================== */

function updateNavigation(){

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navigation.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#" + current

){

link.classList.add("active");

}

});

}

updateNavigation();

window.addEventListener(

"scroll",

updateNavigation,

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

}

});

},

{

threshold:.15

}

);

revealElements.forEach(element=>{

observer.observe(element);

});

/* ===================================

SMOOTH INTERNAL LINKS

=================================== */

document.querySelectorAll(

'a[href^="#"]'

).forEach(link=>{

link.addEventListener(

"click",

event=>{

event.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

}

);

});

/* ===================================

CONTACT FORM

=================================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",event=>{

event.preventDefault();

const button=form.querySelector("button");

button.textContent="Message Sent";

button.disabled=true;

button.classList.add("success");

setTimeout(()=>{

button.textContent="Send";

button.disabled=false;

button.classList.remove("success");

form.reset();

},3000);

});

}

/* ===================================

HERO INDICATOR

=================================== */

const scrollLink=document.querySelector(

".scroll-link"

);

if(scrollLink){

setInterval(()=>{

scrollLink.classList.toggle(

"pulse"

);

},1800);

}

/* ===================================

REDUCED MOTION

=================================== */

const prefersReducedMotion=

window.matchMedia(

"(prefers-reduced-motion: reduce)"

);

if(prefersReducedMotion.matches){

document.documentElement.style.scrollBehavior="auto";

observer.disconnect();

}

/* ===================================

PARALLAX

=================================== */

const hero=document.querySelector(".hero");

window.addEventListener(

"scroll",

()=>{

if(hero){

const offset=window.pageYOffset;

hero.style.backgroundPositionY=

offset*.35+"px";

}

},

{

passive:true

}

);

});