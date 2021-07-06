const iframe = document.querySelector("iframe");
const main = document.querySelector("main");
const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const close = document.querySelector(".main__link-back");

var mainDisplay = window.getComputedStyle(main, null).display;
if (mainDisplay == "block") {
    iframe.src = "about.html";
}

const plant = document.querySelector("object").addEventListener("load", getLinks);
let links = [];

function getLinks() {
    const svgCode = document.querySelector("object").contentDocument;
    links = Array.from(svgCode.querySelectorAll("a"));
    for (let index = 0; index < links.length; index++) {
        links[index].addEventListener("click", () =>
            // nav.classList.add("hidden");
            {if (window.matchMedia("(orientation: portrait)").matches)
                {close.classList.remove("hidden");
                nav.style.height = "0"}
            });
    }
}


// if(window.event.clientX < 40 && window.event.clientY < 0)  
//  {  
//       alert("Browser back button is clicked..."); close.classList.remove("hidden");
//       nav.style.height = "0" 
//  }

close.addEventListener("click", hideIframe)

function hideIframe() {
    // iframe.src="";
    // const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // iframeDoc.querySelector(".subpage__body").setAttribute("id", "hidden");
    // nav.classList.remove("hidden");
    nav.style.height = "100%";
    close.classList.add("hidden");
}

iframe.addEventListener("load", hideNav)

function hideNav() {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    let stil = window.getComputedStyle(nav, null).getPropertyValue("background-color");
    
    if (window.matchMedia("(orientation: landscape)").matches) {
        iframeDoc.querySelector(".subpage__body").addEventListener("unload", () => {
            nav.classList.add("hidden");
        })
    }}