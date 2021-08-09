const iframe = document.querySelector("iframe");
const main = document.querySelector("main");
const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const menuLink = document.querySelector(".main__link-back");
const plant = document.querySelector("object");
let links = [];
plant.addEventListener("load", getLinks);

window.addEventListener("resize", function() {
	if (window.matchMedia("(orientation: portrait)").matches && nav.classList.contains("menuClicked"))
	{menuLink.classList.remove("hidden")}
}, false); //hindrar menylänken från att försvinna när man byter skärmläge

if (window.matchMedia("(orientation: landscape)").matches ) {
    iframe.src="about.html"
 }

function getLinks() {
    const svgCode = document.querySelector("object").contentDocument;
    links = Array.from(svgCode.querySelectorAll("a"));
    // menuLink.classList.remove("hidden");
    for (let index = 0; index < links.length; index++) {
        links[index].addEventListener("click", (e) => {
            if (window.matchMedia("(orientation: portrait)").matches) {
                menuLink.classList.remove("hidden");
            }
        });
    }
}


// if(window.event.clientX < 40 && window.event.clientY < 0)  
//  {  
//       alert("Browser back button is clicked..."); menuLink.classList.remove("hidden");
//       nav.style.height = "0" 
//  }

menuLink.addEventListener("click", showNav)

function showNav() { //körs på desktop men där animeras det ej
    nav.classList.remove("menuClicked");
    menuLink.classList.add("hidden");
    iframe.classList.add("hidden");
}

iframe.addEventListener("load", hideNav) //på desktop är menuClicked 100%
// iframe.addEventListener("hashchange", showNav)
if(!iframe.src && nav.classList.contains("menuClicked")) {menuLink.classList.add("hidden");}


function hideNav() {
    iframe.classList.remove("hidden");
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // plant.classList.add("menuClicked");
    nav.classList.add("menuClicked");
    // iframe.onhashchange = showNav()
    iframeDoc.querySelector(".subpage__body").addEventListener("unload", () => {
        nav.classList.remove("menuClicked");
        menuLink.classList.remove("hidden");
    })//funkar bara på första, skulle visa nav men det är nog fel tänkt
}