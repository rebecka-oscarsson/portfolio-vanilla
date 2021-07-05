const iframe = document.querySelector("iframe");
const main = document.querySelector("main");

var mainDisplay = window.getComputedStyle(main, null).display;
if (mainDisplay == "none") {iframe.src="";}


const plant = document.querySelector("object").addEventListener("load", getLinks);
let links = [];

function getLinks() {
    const svgCode = document.querySelector("object").contentDocument;
    links = Array.from(svgCode.querySelectorAll("a"));
    for (let index = 0; index < links.length; index++) {
        links[index].addEventListener("click", ()=>iframeWrapper.classList.add("showing"));}
}

const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const close = document.querySelector(".main__link-back");

close.addEventListener("click", hideIframe)

function hideIframe() {
    
    
    iframe.src="";
    // const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // console.log(iframeDoc);
    // iframeDoc.querySelector(".subpage__body").classList.add("hidden");
    iframeWrapper.classList.remove("showing");
}