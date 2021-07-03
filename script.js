const plant = document.querySelector("object").addEventListener("load", getLinks);
let links = [];


function getLinks() {
    const svgCode = document.querySelector("object").contentDocument;
    links = Array.from(svgCode.querySelectorAll("a"));
    for (let index = 0; index < links.length; index++) {
        links[index].addEventListener("click", showIframe);
    }
}

const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const close = document.querySelector(".main__link-back");

function showIframe() {
    iframeWrapper.classList.add("showing");
}

close.addEventListener("click", hideIframe);

function hideIframe() {
    iframeWrapper.classList.remove("showing");
}