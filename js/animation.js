//NAVIGATION MENU ANIMATION

var menu = document.getElementById("menu_trigger");
var close = document.getElementById("close");
var menuActive = false;

function toggleMenu() {
   if(menuActive){
      mobileMenu.reverse();
      menuActive = false;
   }
   else{
    mobileMenu.play();
    menuActive = true;
   }
    
}


var mobileMenu = new TimelineMax({
    paused: true
});
mobileMenu
    .set(".overlay", {zIndex: 10}, 0.1)
    .fromTo(".overlay", .5, {opacity: 0}, {opacity: 0.9,ease: Power1.easeOut}, .2)
    .fromTo(close, .2, {opacity: 0}, {opacity: 1,ease: Power1.easeOut}, .3)
    .fromTo("#menu_icon", .2, {opacity: 1}, {opacity: 0,ease: Power1.easeOut}, .2)
    .fromTo(".pos", .5, {y: 0}, {y: '5vw',ease: Power1.easeOut}, .2)
    .fromTo(".pos", .3, {opacity: 0}, {opacity: 1,ease: Power1.easeOut}, .4)
    

;




menu.addEventListener("click", toggleMenu);



//CONTACT ANIMATION


var whatsapp = document.getElementById("contact-option__tel");
var email = document.getElementById("contact-option__email");
var insta = document.getElementById("contact-option__insta");
var facebook = document.getElementById("contact-option__facebook");

var whatsappDetail = document.getElementById("contact-details__tel");
var emailDetail = document.getElementById("contact-details__email");
var instaDetail = document.getElementById("contact-details__insta");
var facebookDetail = document.getElementById("contact-details__facebook");


var callBodhi = new TimelineMax({paused: true});
var mailBodhi = new TimelineMax({paused: true});
var instaBodhi = new TimelineMax({paused: true});
var facebookBodhi = new TimelineMax({paused: true});

callBodhi
.fromTo(whatsapp, .3, {scaleX:1,scaleY:1}, {scaleX:1.3,scaleY:1.3,ease:Back.easeOut.config(1)}, 0)
.fromTo(whatsappDetail, .3, {alpha:0}, {alpha:1,ease: Power1.easeOut}, 0.1)
;
mailBodhi
.fromTo(email, .3, {scaleX:1,scaleY:1}, {scaleX:1.3,scaleY:1.3,ease:Back.easeOut.config(1)}, 0)
.fromTo(emailDetail, .3, {alpha:0}, {alpha:1,ease: Power1.easeOut}, 0.1)
;
instaBodhi
.fromTo(insta, .3, {scaleX:1,scaleY:1}, {scaleX:1.3,scaleY:1.3,ease: Back.easeOut.config(1)}, 0)
.fromTo(instaDetail, .3, {alpha:0}, {alpha:1,ease: Power1.easeOut}, 0.1)
;
facebookBodhi
.fromTo(facebook, .3, {scaleX:1,scaleY:1}, {scaleX:1.3,scaleY:1.3,ease:Back.easeOut.config(1)}, 0)
.fromTo(facebookDetail, .3, {alpha:0}, {alpha:1,ease: Power1.easeOut}, 0.1)
;

function showContactDetail(cType){
    cType.play();
 }
 function hideContactDetail(cType){
    cType.reverse();
 }


whatsapp.addEventListener("mouseover", function(){showContactDetail(callBodhi)});
email.addEventListener("mouseover", function(){showContactDetail(mailBodhi)});
insta.addEventListener("mouseover", function(){showContactDetail(instaBodhi)});
facebook.addEventListener("mouseover", function(){showContactDetail(facebookBodhi)});

whatsapp.addEventListener("mouseout", function(){hideContactDetail(callBodhi)});
email.addEventListener("mouseout", function(){hideContactDetail(mailBodhi)});
insta.addEventListener("mouseout", function(){hideContactDetail(instaBodhi)});
facebook.addEventListener("mouseout", function(){hideContactDetail(facebookBodhi)});