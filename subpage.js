

const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const close = document.querySelector(".main__link-back");

let subpage = document.querySelector(".subpage__body");
if(subpage){subpage.addEventListener("load", showIframe)}

function showIframe() {
    iframeWrapper.classList.add("showing");
}

close.addEventListener("click", hideIframe);

function hideIframe() {
    iframeWrapper.classList.remove("showing");
}