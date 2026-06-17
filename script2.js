let isThis = document.getElementById('section-1-1-drophead1');
let whatIs = document.getElementById('section-1-1-drophead2');

let isThisDrop = document.getElementById('section-1-1-dropdown1');
let whatIsDrop = document.getElementById('section-1-1-dropdown2');

isThis.addEventListener('click', expandIsThis);
whatIs.addEventListener('click', expandWhatIs)

function expandIsThis(){
  isThisDrop.classList.toggle('open');
}

function expandWhatIs(){
  whatIsDrop.classList.toggle('open');
}



// menu

let menuBurger = document.getElementById('menu-burger');
let menu = document.getElementById('menu');

menuBurger.addEventListener('click', openMenu);

let isMenuOpen = '0';

function openMenu(){
   

   if (isMenuOpen === '0'){
    menu.style.opacity = "1";
    menuBurger.src = "x-lg.svg";
    isMenuOpen = '1';
    console.log(isMenuOpen);
    
   } else if (isMenuOpen === '1'){
    menu.style.opacity = "0";
    menuBurger.src = "list.svg";
    isMenuOpen = '0';
    console.log(isMenuOpen);
   }

}





let navLinks = document.getElementsByClassName('nav-link');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', openMenu);
}



// cta

let ctaBtn = document.getElementById("cta-btn");


let chvTLLrg = document.getElementById("chevron-top-left-lrg");
let chvBtmRLarg = document.getElementById("chevron-btm-right-lrg");

ctaBtn.addEventListener("mouseover", ctaBox);
ctaBtn.addEventListener("mouseleave", ctaNoBox);
ctaBtn.addEventListener("mousedown", lrgChevronIn);
ctaBtn.addEventListener("mouseup", lrgChevronOut);


function ctaBox() {
  lrgChevronOut();
}

function ctaNoBox() {
  lrgChevronIn();
}

function lrgChevronOut() {
  chvTLLrg.style.top = "-5px";
  chvTLLrg.style.left = "-5px";
  chvBtmRLarg.style.bottom = "-5px";
  chvBtmRLarg.style.right = "-5px";
}
function lrgChevronIn() {
  chvTLLrg.style.top = "0px";
  chvTLLrg.style.left = "0px";
  chvBtmRLarg.style.bottom = "0px";
  chvBtmRLarg.style.right = "0px";
}